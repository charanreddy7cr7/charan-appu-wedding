# ─── GitHub Actions OIDC → IAM Role ──────────────────────────────────────────
# Lets GitHub Actions assume an AWS role via OIDC federation (no static keys).

variable "github_repo" {
  description = "GitHub repo in owner/name form, allowed to assume the CI role"
  type        = string
  default     = "charanreddy7cr7/charan-appu-wedding"
}

# Numeric IDs for GitHub's immutable-subject OIDC claim format.
# Update these after creating the repo:
#   Owner ID:  gh api /users/charanreddy7cr7 --jq .id
#   Repo ID:   gh api /repos/charanreddy7cr7/charan-appu-wedding --jq .id
variable "github_owner_id" {
  description = "Numeric GitHub user/org ID (gh api /users/<owner> --jq .id)"
  type        = string
  default     = "118852281"
}

variable "github_repo_id" {
  description = "Numeric GitHub repo ID (gh api /repos/<owner>/<repo> --jq .id)"
  type        = string
  default     = "1378635536"
}

# OIDC identity provider for GitHub Actions
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
  tags            = local.tags
}

# Trust policy: only this repo can assume the role
data "aws_iam_policy_document" "github_assume" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values = [
        "repo:${var.github_repo}:*",
        "repo:${split("/", var.github_repo)[0]}@${var.github_owner_id}/${split("/", var.github_repo)[1]}@${var.github_repo_id}:*",
      ]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name               = "${local.project}-github-actions"
  assume_role_policy = data.aws_iam_policy_document.github_assume.json
  tags               = local.tags
}

# Permissions the CI needs: manage the project's infra + deploy the site.
data "aws_iam_policy_document" "github_actions" {
  # Terraform state backend
  statement {
    sid    = "TerraformState"
    effect = "Allow"
    actions = [
      "s3:GetObject", "s3:PutObject", "s3:ListBucket", "s3:DeleteObject",
    ]
    resources = [
      "arn:aws:s3:::charan-appu-wedding-tfstate",
      "arn:aws:s3:::charan-appu-wedding-tfstate/*",
    ]
  }

  statement {
    sid       = "TerraformLock"
    effect    = "Allow"
    actions   = ["dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:DeleteItem"]
    resources = ["arn:aws:dynamodb:*:${data.aws_caller_identity.current.account_id}:table/charan-appu-wedding-tf-lock"]
  }

  # Deploy static site + read state of managed resources.
  statement {
    sid    = "ManageProject"
    effect = "Allow"
    actions = [
      "s3:*",
      "cloudfront:*",
      "lambda:*",
      "apigateway:*",
      "dynamodb:*",
      "iam:*",
      "ses:*",
      "logs:*",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "github_actions" {
  name   = "${local.project}-github-actions-policy"
  role   = aws_iam_role.github_actions.id
  policy = data.aws_iam_policy_document.github_actions.json
}

output "github_actions_role_arn" {
  description = "IAM role ARN for GitHub Actions to assume via OIDC"
  value       = aws_iam_role.github_actions.arn
}
