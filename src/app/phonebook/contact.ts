export class Contact{
    firstname:string;
    lastname:string;
    phoneno:number;
    constructor(phoneno?:number,firstname?:string,lastname?:string)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.phoneno=phoneno;
    }
}