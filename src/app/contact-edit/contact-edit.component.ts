import { iContact } from './../contact-list/interface.componet';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from './../app-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  name: string = "";
  email: string = "";
  phone: string = "";
  id: number = 0;

  
  constructor(private AppData: AppDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id') as string);
    let pkts = this.AppData.getUpdateInfoById(this.id);
    this.name = pkts.name;
    this.email = pkts.email;
    this.phone = pkts.phone;
    
  }

  update(): void {
    let pkts: iContact = {id: this.id, name: this.name, email: this.email, phone: this.phone, toggleShow: false}
    this.AppData.updateContact(pkts)
    this.router.navigate(['/'])
    
  }

}
