// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2najveclm5f54bfr4i5n1ieuif",     // CognitoClientID
  "api_base_url": "https://rwncdc6kmd.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverlesspractice.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1imtjhva0yf04.amplifyapp.com"                                      // AmplifyURL
};

export default config;
