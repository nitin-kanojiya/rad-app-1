import { Component, OnInit } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }


  services=[
    { 
      "name": "Painter",
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
    value:"labours"
  }
  labours=[
    {
      "name": "ranjan pant",
      "age": 21,
      "img_url": "url('../../assets/img/labour/labour (1).jpg')"
    },
    {
      "name": "ravi kaler",
      "age": 20,
      "img_url": "url('../../assets/img/labour/labour (2).jpg')"
    },
    {
      "name": "rohit kamboj",
      "age": 22,
      "img_url": "url('../../assets/img/labour/labour (3).jpg')"
    },
    {
      "name": "shahid khan",
      "age": 20,
      "img_url": "url('../../assets/img/labour/labour (4).jpg')"
    }
  ];
  plumbers=[
    {
      "name": "ranjan pant",
      "age": 21,
      "img_url": "url('../../assets/img/plumber/plumber (1).jpg')"
    },
    {
      "name": "ravi kaler",
      "age": 20,
      "img_url": "url('../../assets/img/plumber/plumber (2).jpg')"
    },
    {
      "name": "rohit kamboj",
      "age": 22,
      "img_url": "url('../../assets/img/plumber/plumber (3).jpg')"
    },
    {
      "name": "shahid khan",
      "age": 20,
      "img_url": "url('../../assets/img/plumber/plumber (4).jpg')"
    }
  ];
  electricians=[
    {
      "name": "Aftab ahmed",
      "age": 21,
      "img_url": "url('../../assets/img/electrician/electrician (1).jpg')"
    },
    {
      "name": "Veer singh",
      "age": 20,
      "img_url": "url('../../assets/img/electrician/electrician (2).jpg')"
    },
    {
      "name": "bhole lal",
      "age": 22,
      "img_url": "url('../../assets/img/electrician/electrician (3).jpg')"
    },
    {
      "name": "rizwi shah",
      "age": 20,
      "img_url": "url('../../assets/img/electrician/electrician (4).jpg')"
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
