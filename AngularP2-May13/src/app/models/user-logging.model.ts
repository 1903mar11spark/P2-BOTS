
export class UserLogging {
    username: string; 
    firstname: string;
    lastname: string;
    email: string;
    usertype: string; 


    constructor(username: string, firstname: string, lastname: string, email: string, usertype: string) {
        this.username = username; 
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.usertype = usertype;
    }
    
}