import { CognitoUser } from "@aws-amplify/auth"


export interface ExtendedCognitoUser extends CognitoUser {
    username: string;
}