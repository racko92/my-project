import { Component, Injector } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})

export class ContactsComponent {

    private contacts: any = [];
    private filter: string = '';
    private contactsService: ContactsService;

    constructor(private injector: Injector) { 
       
        this.contactsService = this.injector.get(ContactsService);

        this.contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        },
        (err:HttpErrorResponse) =>{
            console.log(`Backend returned code ${err.status} with message: ${err.error}`);
        });
    }
    remove(contact){
        const index = this.contacts.indexOf(contact);

        this.contactsService.removeContact(contact)
        .subscribe(
            (contact: Contact) => {
                const index = this.contacts.indexOf(contact);
                this.contacts.splice(index, 1);
            }
        );
    }

    submitContact(contact: Contact){
        if(contact.id){
            this.contactsService.editContact(contact)
            .subscribe(
                (contact: Contact) => {
                    let existingContact = this.contacts.filter( c => c.id == contact.id);
                    if(existingContact.length){
                        Object.assign(existingContact[0], contact);
                    }
                }
            )
        }
        else{
            this.contactsService.addContact(contact).
            subscribe(
                contact => {
                    this.contacts.push(contact);             
                }
            );
        }        
    }
}