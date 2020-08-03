import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactService } from './phonebook/contactservice';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    AddcontactComponent,
    //CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents: [AddcontactComponent]
})
export class AppModule { }
