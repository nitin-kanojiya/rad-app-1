import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OurServicesService } from './our-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rad-app';

  constructor(
    private router: Router,
    private ourservice: OurServicesService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.navigate(['']);
  }
}
