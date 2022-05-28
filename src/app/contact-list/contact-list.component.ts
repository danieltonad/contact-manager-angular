import { iContact } from './interface.componet';
import { AppDataService } from './../app-data.service';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {
  

  faAngleDoubleDown = faAngleDoubleDown;
  faTimes = faTimes;
  faEdit = faEdit;
  contacts :Array<iContact> = [];

  constructor(private AppData :AppDataService) { }


  ngOnInit(): void {
    // this.contacts = this.AppData.getcontacts();
  }

  ngDoCheck(): void {
    this.contacts = this.AppData.getcontacts();
    console.log(Math.random());
    
  }

  
  toggle(contact: object) {
    // cast objects biiishhh just like c# and php7+
    let newObj = contact as iContact;
    newObj.toggleShow = !newObj.toggleShow
    
  }


  del(id: number){
    this.AppData.deleteContact(id)
  }

}
