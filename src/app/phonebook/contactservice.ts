import {Contact} from './contact'

export class ContactService{
    contact:Contact;
    contacts:Contact[];
    constructor(){
        this.contacts=[new Contact(1800400162,'Emergency')];
    }
    getContacts(){
        return this.contacts;
    }
    addContact(contact){
        this.contacts.push(contact);
        // this.contact=new Contact();
    }
    


}