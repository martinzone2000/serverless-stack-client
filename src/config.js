export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_evRHrjDgLdqSfPEVJSiRDxPz0067bWQg59",
  s3: {
    REGION: "us-west-2",
    BUCKET: "jmartin-notes-app-upload"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://w01mr1rnhe.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_tV6NG4yZl",
    APP_CLIENT_ID: "6uotl9nmsg0dpeefjqqvaj5378",
    IDENTITY_POOL_ID: "us-west-2:2d020cc4-55bf-4e9d-8381-fa7449317ed2"
  }
};