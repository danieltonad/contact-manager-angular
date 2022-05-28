import { iContact, iJson } from './contact-list/interface.componet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private contacts: Array<iContact> = [];

  private url: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) { }

  getcontacts() : Array<iContact> {
    if(this.contacts.length < 1){
      this.http.get<Array<iJson>>(this.url)
      .subscribe((data) => {
        let newPkts : iContact;
        data.forEach((element) => {
          newPkts = {id: element.id, name: element.name, phone: element.phone, email: element.email, toggleShow: false};
          this.contacts.push(newPkts)
        });
      });
    }
    else {}
    return this.contacts
  }

  getUpdateInfoById(id : number){
    // find index then update
    let index: number = this.contacts.findIndex((obj, index) => obj.id == id)
    return this.contacts[index];
  }

  addContact(newData: object) {
    type iPkts = {name: string, email: string, phone: string};
    let pkts = newData as iPkts;
    let id: number = this.contacts.length + (Math.round(8) * 20);
    let newContactData :iContact = {id: id, name: pkts.name, phone: pkts.phone, email: pkts.email, toggleShow: false};
    this.contacts.unshift(newContactData);
    
  }

  updateContact(updateData :iContact) {
    let id = updateData.id;
    // find index then update
    let index: number = this.contacts.findIndex((obj, index) => obj.id == id)
    this.contacts[index].name = updateData.name
    this.contacts[index].phone = updateData.phone
    this.contacts[index].email = updateData.email
  }

  deleteContact(id: number) {
    // filter
    this.contacts  = this.contacts.filter((data) => data.id != id);
    
  }

}

