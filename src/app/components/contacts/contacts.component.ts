import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})

export class ContactsComponent {

    private contacts: any = [];
    private filter: string = '';

    constructor(contactsService: ContactsService) { 
        contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        });
    }
    remove(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }
}