import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: '[contactRow]',
  templateUrl: './contact-row.component.html'
})
export class ContactRowComponent{

  @Input() 
  set contactRow(contact: Contact){
    this.contact = contact;
  }
  
  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onRemove = new EventEmitter<Contact>();

  private contact: Contact;

  constructor() {}
   
  edit(contact: Contact){
    this.onEdit.emit(contact);
  }
  remove(contact: Contact){
    this.onRemove.emit(contact);
  }

}
