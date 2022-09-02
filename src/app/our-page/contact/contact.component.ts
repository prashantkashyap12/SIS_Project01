import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  address:string ='Old No 36/1, New No 18/1,Behind KFC,12th Avenue, Ashok Nagar, Chennai, Tamil Nadu 600083';
  
  location =  {
         "imageUrl":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.94177449633156!2d80.21176504287364!3d13.031316697878063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671fa7ed2a0d%3A0x43cfc22d42fa7838!2s11th%20Avenue%2C%20Mettuppalayam%2C%20Ashok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600083!5e0!3m2!1sen!2sin!4v1662014049826!5m2!1sen!2sin"
  }

  mailEmail = [
    {
      email:'sisinsndt@yahoo.com',
    },
    {
      email:'certificationsis@gmail.com',
    },
    {
      email:'certificationsis@gmail.com',
    },
  ]
  contactNum = [
    {
      contact:'9282106896'
    },
    {
      contact:'9444298642'
    },
    {
      contact:'9710399300'
    },
    {
      contact:'044-24717182'
    },
  ]

}
