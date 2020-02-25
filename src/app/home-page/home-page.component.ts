import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {
  }

}
