import { Component, OnInit } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }


  products=[
    { 
      "name": "Painting",
      "icon": "fas fa-paint-roller",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Carpenter",
      "icon": "fas fa-hammer",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Electrician",
      "icon": "fas fa-plug",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Plumber",
      "icon": "fas fa-toilet",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Heavy Lifting",
      "icon": "fas fa-weight-hanging",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Metal Work",
      "icon": "fas fa-hand-rock",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "AC/Refrigerator",
      "icon": "fas fa-wind",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "And More..",
      "icon": "fas fa-ellipsis-h",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    }
  ];

  handymanCase={
    value:"carpenters"
  }
  plumbers=[
    {
      "name": "name p1",
      "age": 21
    },
    {
      "name": "name p2",
      "age": 20
    },
    {
      "name": "name 3",
      "age": 22
    },
    {
      "name": "name 4",
      "age": 20
    }
  ];
  electricians=[
    {
      "name": "name e1",
      "age": 21
    },
    {
      "name": "name e2",
      "age": 20
    },
    {
      "name": "name 3",
      "age": 22
    },
    {
      "name": "name 4",
      "age": 20
    }
  ];
  carpenters=[
    {
      "name": "Mukesh suri",
      "age": 21,
      "img_url": "url('../../assets/img/carpenter/carpenter(1).jpg')"
    },
    {
      "name": "raj Ambani",
      "age": 20,
      "img_url": "url('../../assets/img/carpenter/carpenter(2).jpg')"
    },
    {
      "name": "Pandit ramfal",
      "age": 22,
      "img_url": "url('../../assets/img/carpenter/carpenter(3).jpg')"
    },
    {
      "name": "Mohd Abdul",
      "age": 20,
      "img_url": "url('../../assets/img/carpenter/carpenter(4).jpg')"
    }
  ];
   
  ngOnInit() {
  }

}
