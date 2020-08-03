import { Component, OnInit } from '@angular/core';
import {Contact} from '../phonebook/contact'
import {ContactService} from '../phonebook/contactservice';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  contact:Contact;
  constructor(private contactservice:ContactService,public dialogRef: MatDialogRef<AddcontactComponent>) { 
    this.contact=new Contact();
  }
  // getFirstName(Fname:string){
  //   this.contact.firstname=Fname;
  // }
  // getLastName(Lname:string){
  //   this.contact.lastname=Lname;
  // }
  // getPhoneNo(pno:number){
  //   this.contact.phoneno=pno;
  // }

  addContact(){
    this.contactservice.addContact(this.contact);
    this.contact=new Contact();
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
