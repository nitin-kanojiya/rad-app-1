import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HandymanListComponent } from './handyman/handyman-list/handyman-list.component';
import { HandymanDetailsComponent } from './handyman/handyman-details/handyman-details.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '' , redirectTo:'/home' , pathMatch: 'full'},
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'services', component: OurServicesComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'list', component: HandymanListComponent
  },
  {
    path: 'details', component: HandymanDetailsComponent
  },
  { 
    path: 'admin' , component: AdminComponent
  }
  // ,
  // {
  //   path: '**', redirectTo: '/home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
