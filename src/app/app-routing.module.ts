import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        children:[
            {
                path: ':id',
                component: ContactDetailsComponent
            }
        ]
    },
    {
        path: 'messages',
        component: MessagesComponent
    }
];

@NgModule({
    imports: [
    RouterModule.forRoot(
        appRoutes
    )
    ],
    exports: [
    RouterModule
    ]
})

  export class AppRoutingModule{}