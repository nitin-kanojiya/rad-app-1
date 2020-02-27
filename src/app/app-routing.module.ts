import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OurServicesComponent } from './our-services/our-services.component';


const routes: Routes = [
  { path: '' , redirectTo:'/home' , pathMatch: 'full'},
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'services', component: OurServicesComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
