import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import {ContactService} from './contactservice'

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  icontact:Contact;
  icontacts:Contact[];
  searches:Contact[];
  search:any;
  detect:boolean=false;

  constructor(private matDialog: MatDialog,private contactservice:ContactService) { 
    this.icontacts=this.contactservice.getContacts();
    this.searches=[];
  }


  // addContact(contact)
  // {
  //   this.icontacts.push(contact);
  // }
  
  searchContact()
  {
    this.detect=true;
    for(let i=0;i<this.icontacts.length;i++)
     {
        if(this.icontacts[i].firstname==this.search || this.icontacts[i].lastname==this.search || this.icontacts[i].phoneno==this.search)
        {
          this.searches.push(this.icontacts[i]);          
        }
     }
     this.search=null;  
  }
  
  back(){
    this.detect=false;
    this.searches=[];
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.id = "addcontact-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(AddcontactComponent, dialogConfig);
  }
  deleteContact(contact){
        
    const index: number = this.icontacts.indexOf(contact);
    this.icontacts.splice(index, 1);
  }
  deleteContactFromSearches(contact){
    const index1: number = this.icontacts.indexOf(contact);
    this.icontacts.splice(index1, 1);
    const index2: number = this.searches.indexOf(contact);
    this.searches.splice(index2, 1);
  }
  // sortcontacts(){
  //   this.icontacts.sort((a,b)=> a.firstname>a.lastname);
  //   console.log(this.icontacts);
  // }
  sortContactsByFirstName(){
      this.icontacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
   }
  sortContactsByLastName(){
    this.icontacts.sort((a, b) => a.lastname.localeCompare(b.lastname));
 }
 sortContactsByPhoneNumber(){
  this.icontacts.sort(function(a, b){
   if ( a.phoneno < b.phoneno ){
      return -1;
    }
    if ( a.phoneno > b.phoneno ){
      return 1;
    }
    return 0;})
  }


  // sortContactByNameAcc(){
  //   for(let i=0;i<this.icontacts.length;i++)
  //   {
  //       this.icontacts[i]
  //   }
  // }
  // sortContactByNameDesc(){
    
  // }
  // sortContactByNumber(){
    
  // }

  ngOnInit(): void {
  }

}
