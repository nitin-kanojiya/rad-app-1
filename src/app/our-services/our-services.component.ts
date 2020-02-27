import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  searchText;

  services=[
    { 
      "name": "Labour",
      "img_url": "url('../../assets/img/services/labour.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Electrician",
      "img_url": "url('../../assets/img/services/electrician.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Plumber",
      "img_url": "url('../../assets/img/services/plumber.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Carpenter",
      "img_url": "url('../../assets/img/services/carpenter.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Painter",
      "img_url": "url('../../assets/img/services/painter.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Heavy Lifting",
      "img_url": "url('../../assets/img/services/heavy-lifting.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "Metal Work",
      "img_url": "url('../../assets/img/services/metal-works.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    },
    { 
      "name": "AC/Refrigerator",
      "img_url": "url('../../assets/img/services/ac-repair.jpg')",
      "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, repellat."
    }
  ];

  ngOnInit() {
  }

}
