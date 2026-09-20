terraform {
  backend "s3" {
    bucket         = "charan-appu-wedding-tfstate"
    key            = "wedding/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "charan-appu-wedding-tf-lock"
    encrypt        = true
  }
}
