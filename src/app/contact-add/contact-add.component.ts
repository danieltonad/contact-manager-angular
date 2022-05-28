import { Router } from '@angular/router';
import { AppDataService } from './../app-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  name: string = "";
  email: string = "";
  phone: string = "";
  
  constructor(private AppData: AppDataService, private router :Router) { }

  ngOnInit(): void {
  }

  add(): void {
    let pkt = {name:  this.name, email: this.email, phone: this.phone}
    this.AppData.addContact(pkt)
    this.router.navigate(['/']);
  }

}
