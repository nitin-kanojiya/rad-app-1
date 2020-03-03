import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class OurServicesService {

    imgage_url="D:/VSCode/rad-app/src/assets/img/";
    
  services=[
    {
      "id": "1",
      "name": "Labour",
      "img_url": "/assets/img/services/labour.jpg",
      "icon": "fas fa-paint-roller",
      "desc": "Some work which we can't do, Here we hired a person for taking care of your task. They are dedicated, they never leave you with disoppointment.",
      "list": [
        {
          "id": "1",
          "name": "ranjan pant",
          "age": 21,
          "img_url": "/assets/img/labour/labour (1).jpg"
        },
        {
          "id": "2",
          "name": "ravi kaler",
          "age": 20,
          "img_url": "/assets/img/labour/labour (2).jpg"
        },
        {
          "id": "3",
          "name": "rohit kamboj",
          "age": 22,
          "img_url": "/assets/img/labour/labour (3).jpg"
        },
        {
          "id": "4",
          "name": "shahid khan",
          "age": 20,
          "img_url": "/assets/img/labour/labour (4).jpg"
        }
      ]
    },
    { 
      "id": "2", 
      "name": "Carpenter",
      "img_url": "/assets/img/services/carpenter.jpg",
      "icon": "fas fa-hammer",
      "desc": "They can work on your furniture, stairs, windows, doors and many others and repais and build your wooden items. Give them a chance to make you happy with thier service.",
      "list": [
        {
          "id": "1",
          "name": "Mukesh suri",
          "age": 21,
          "img_url": "/assets/img/carpenter/carpenter(1).jpg"
        },
        {
          "id": "2",
          "name": "raj Ambani",
          "age": 20,
          "img_url": "/assets/img/carpenter/carpenter(2).jpg"
        },
        {
          "id": "3",
          "name": "Pandit ramfal",
          "age": 22,
          "img_url": "/assets/img/carpenter/carpenter(3).jpg"
        },
        {
          "id": "4",
          "name": "Mohd Abdul",
          "age": 20,
          "img_url": "/assets/img/carpenter/carpenter(4).jpg"
        }
      ]
    },
    { 
      "id": "3", 
      "name": "Electrician",
      "img_url": "/assets/img/services/electrician.jpg",
      "icon": "fas fa-plug",
      "desc": "If you are looking for an electrician in your area, give us a chance to serve you a better one.",
      "list": [
            {
              "id": "1",
              "name": "Aftab ahmed",
              "age": 21,
              "img_url": "/assets/img/electrician/electrician (1).jpg"
            },
            {
              "id": "2",
              "name": "Veer singh",
              "age": 20,
              "img_url": "/assets/img/electrician/electrician (2).jpg"
            },
            {
              "id": "3",
              "name": "bhole lal",
              "age": 22,
              "img_url": "/assets/img/electrician/electrician (3).jpg"
            },
            {
              "id": "4",
              "name": "rizwi shah",
              "age": 20,
              "img_url": "/assets/img/electrician/electrician (4).jpg"
            }
        ]
    },
    {
      "id": "4", 
      "name": "Plumber",
      "img_url": "/assets/img/services/plumber.jpg",
      "icon": "fas fa-toilet",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat.",
      "list":[
        {
          "id": "1",
          "name": "ranjan pant",
          "age": 21,
          "img_url": "/assets/img/plumber/plumber (1).jpg"
        },
        {
          "id": "2",
          "name": "ravi kaler",
          "age": 20,
          "img_url": "/assets/img/plumber/plumber (2).jpg"
        },
        {
          "id": "3",
          "name": "rohit kamboj",
          "age": 22,
          "img_url": "/assets/img/plumber/plumber (3).jpg"
        },
        {
          "id": "4",
          "name": "shahid khan",
          "age": 20,
          "img_url": "/assets/img/plumber/plumber (4).jpg"
        }
      ]
    },
    { 
      "id": "5", 
      "name": "Heavy Lifting",
      "img_url": "/assets/img/services/heavy-lifting.jpg",
      "icon": "fas fa-weight-hanging",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat.",
      "list": [
        {
          "id": "1",
          "name": "ranjan pant",
          "age": 21,
          "img_url": "/assets/img/labour/labour (1).jpg"
        },
        {
          "id": "2",
          "name": "ravi kaler",
          "age": 20,
          "img_url": "/assets/img/labour/labour (2).jpg"
        },
        {
          "id": "3",
          "name": "rohit kamboj",
          "age": 22,
          "img_url": "/assets/img/labour/labour (3).jpg"
        },
        {
          "id": "4",
          "name": "shahid khan",
          "age": 20,
          "img_url": "/assets/img/labour/labour (4).jpg"
        }
      ]
    },
    { 
      "id": "6", 
      "name": "Metal Work",
      "img_url": "/assets/img/services/metal-works.jpg",
      "icon": "fas fa-hand-rock",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat.",
      "list": [
        {
          "id": "1",
          "name": "ranjan pant",
          "age": 21,
          "img_url": "/assets/img/labour/labour (1).jpg"
        },
        {
          "id": "2",
          "name": "ravi kaler",
          "age": 20,
          "img_url": "/assets/img/labour/labour (2).jpg"
        },
        {
          "id": "3",
          "name": "rohit kamboj",
          "age": 22,
          "img_url": "/assets/img/labour/labour (3).jpg"
        },
        {
          "id": "4",
          "name": "shahid khan",
          "age": 20,
          "img_url": "/assets/img/labour/labour (4).jpg"
        }
      ]
    },
    { 
      "id": "7", 
      "name": "AC/Refrigerator",
      "img_url": "/assets/img/services/ac-repair.jpg",
      "icon": "fas fa-wind",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat.",
      "list": [
        {
          "id": "1",
          "name": "ranjan pant",
          "age": 21,
          "img_url": "/assets/img/labour/labour (1).jpg"
        },
        {
          "id": "2",
          "name": "ravi kaler",
          "age": 20,
          "img_url": "/assets/img/labour/labour (2).jpg"
        },
        {
          "id": "3",
          "name": "rohit kamboj",
          "age": 22,
          "img_url": "/assets/img/labour/labour (3).jpg"
        },
        {
          "id": "4",
          "name": "shahid khan",
          "age": 20,
          "img_url": "/assets/img/labour/labour (4).jpg"
        }
      ]

    },
    {
        "id": "8",
        "name": "Painter",
        "img_url": "/assets/img/services/painter.jpg",
        "icon": "fas fa-paint-roller",
        "desc": "Are you looking locals interior house painters? Book our painting professionals at Affordable, pocket pricing",
        "list": [
          {
            "id": "1",
            "name": "ranjan pant",
            "age": 21,
            "img_url": "/assets/img/labour/labour (1).jpg"
          },
          {
            "id": "2",
            "name": "ravi kaler",
            "age": 20,
            "img_url": "/assets/img/labour/labour (2).jpg"
          },
          {
            "id": "3",
            "name": "rohit kamboj",
            "age": 22,
            "img_url": "/assets/img/labour/labour (3).jpg"
          },
          {
            "id": "4",
            "name": "shahid khan",
            "age": 20,
            "img_url": "/assets/img/labour/labour (4).jpg"
          }
        ]  
    }
  ];
  getServices(){
      return this.services;
  }
  constructor() { }
    
}