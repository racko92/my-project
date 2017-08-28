import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  public getContacts() {
      return this.http.get<any[]>('http://localhost:8000/contacts.php');
  }

  public addContact(firstName, lastName, email){
      return this.http.post('http://localhost:8000/contacts-add.php',{
          firstName: firstName,
          lastName: lastName,
          email: email
      });
  }
}
