
export class UserLogging {

    //instance variables 
    username: string; 
    firstname: string;
    lastname: string;
    email: string;
    usertype: string; 

    //constructor
    constructor(username: string, firstname: string, lastname: string, email: string, usertype: string) {
        this.username = username; 
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.usertype = usertype;
        
    }
    
}