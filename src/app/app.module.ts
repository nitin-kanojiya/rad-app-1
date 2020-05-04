import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HandymanDetailsComponent } from './handyman/handyman-details/handyman-details.component';
import { HandymanListComponent } from './handyman/handyman-list/handyman-list.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { 
  MatExpansionModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TermsPolicyComponent } from './terms-policy/terms-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    OurServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HandymanDetailsComponent,
    HandymanListComponent,
    AdminComponent,
    TermsPolicyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
