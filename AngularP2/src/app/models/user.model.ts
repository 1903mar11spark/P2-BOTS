import { UserType } from 'src/app/models/user-type.model';
import { LoginCreds } from '../models/login-creds.model';

export class User {
    id: number;
    fName: string;
    lName: string;
    email: string;
    userType: UserType; 
    loginCreds: LoginCreds; 
    mentoredBy: number; 

    constructor(id: number, fName: string, lName: string, email: string, userType: UserType, loginCreds: LoginCreds, mentoredBy: number) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.userType = userType;
        this.loginCreds = loginCreds; 
        this.mentoredBy = mentoredBy;
    }
}


