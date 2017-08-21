import { Component } from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {

    private contacts: any[];

    constructor() { 
        this.contacts = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com'
            },
            {
                firstName: 'Sam',
                lastName: 'Smith',
                email: 'sam@doe.com'
            },
            {
                firstName: 'George',
                lastName: 'Sullivan',
                email: 'george@doe.com'
            }
        ];
    }

}