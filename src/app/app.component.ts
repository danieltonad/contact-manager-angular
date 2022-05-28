import { Component } from '@angular/core';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faHome = faHome;
  faPlus = faPlus;
  faUser = faUser;
  copyrightDate = new Date().getFullYear()

}
