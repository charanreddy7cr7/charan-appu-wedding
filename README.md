# Approva ♾ Charan — Wedding Website

A full-stack wedding invitation and RSVP website for **Approva & Charan's wedding, November 18–21, 2026**.

Built with Next.js (frontend) + AWS serverless backend (Lambda, API Gateway, DynamoDB, SES, S3, CloudFront), deployed via GitHub Actions.

---

## Quick Start (Local Dev)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to AWS

### Prerequisites
1. AWS account with appropriate permissions
2. Create the Terraform state backend manually (one-time):

```bash
# Create S3 bucket for Terraform state
aws s3api create-bucket \
  --bucket charan-appu-wedding-tfstate \
  --region us-east-1

aws s3api put-bucket-versioning \
  --bucket charan-appu-wedding-tfstate \
  --versioning-configuration Status=Enabled

# Create DynamoDB lock table
aws dynamodb create-table \
  --table-name charan-appu-wedding-tf-lock \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

3. Copy `infra/terraform.tfvars.example` to `infra/terraform.tfvars` and fill in values:

```bash
cp infra/terraform.tfvars.example infra/terraform.tfvars
# Edit terraform.tfvars with your admin_password_hash and auth_secret
```

4. Get GitHub numeric IDs for OIDC (requires `gh` CLI):

```bash
gh api /users/charanreddy7cr7 --jq .id        # github_owner_id
gh api /repos/charanreddy7cr7/charan-appu-wedding --jq .id  # github_repo_id
```

Update `infra/github-oidc.tf` with these values.

### First-Time Terraform Deploy

```bash
cd infra
terraform init
terraform apply
```

After apply, note the `github_actions_role_arn` output.

### GitHub Actions Setup

Add these secrets to your GitHub repo (`Settings → Secrets → Actions`):

| Secret | Value |
|--------|-------|
| `AWS_ROLE_ARN` | The `github_actions_role_arn` output from Terraform |
| `TF_VAR_ADMIN_PASSWORD_HASH` | SHA-256 hash of your admin password |
| `TF_VAR_AUTH_SECRET` | Random hex secret for session tokens |

Generate values:
```bash
# Admin password hash
printf '%s' 'YOUR_PASSWORD' | shasum -a 256

# Auth secret
openssl rand -hex 32
```

### After First Deploy

After Terraform creates the API Gateway, update the RSVP endpoint in `app/components/RSVPSection.tsx`:

```tsx
// Replace /api/rsvp with the actual API Gateway URL:
const res = await fetch("https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/api/rsvp", {
```

Push to `main` — GitHub Actions will deploy automatically on every push.

---

## Project Structure

```
├── app/
│   ├── components/        # All UI sections
│   │   ├── HeroSection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── RSVPSection.tsx
│   │   └── ...
│   ├── page.tsx
│   └── layout.tsx
├── infra/
│   ├── lambda/
│   │   └── rsvp_handler.py   # RSVP backend (Python)
│   ├── main.tf
│   ├── variables.tf
│   ├── backend.tf
│   └── *.tf
├── public/
│   ├── gallery/           # Add your couple photos here
│   └── music/             # Background music
└── .github/workflows/
    └── deploy.yml
```

---

## Customize

- **Gallery photos**: Replace files in `public/gallery/` with your own photos
- **Music**: Replace `public/music/mangalyam.mp3` with your preferred song
- **Venue details**: Update addresses in `app/components/EventsSection.tsx` and `VenueSection.tsx` once confirmed
- **Emails**: Update `notification_email` and `couple_email` in `infra/variables.tf`

---

*Approva & Charan · November 2026*
