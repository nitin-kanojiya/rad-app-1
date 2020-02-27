import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
