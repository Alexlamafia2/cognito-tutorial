import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_Uv2m17UzL",
  ClientId: "3849l9u54l0ghc5ka8h41971qk",
};

export default new CognitoUserPool(poolData);
