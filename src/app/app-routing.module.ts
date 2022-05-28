import { HomeRouteComponent } from './home-route/home-route.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    component: HomeRouteComponent,
  },
  {
    path: 'add',
    component: ContactAddComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
