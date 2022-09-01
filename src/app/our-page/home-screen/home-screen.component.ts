import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  data = [
    {
      title:'Practice Problems',
    },
    {
      title:'Challenges & Hackathons',
    },
    {
      title:'Skill Tests',
    },
    { 
      title:'Webinars',
    },
    {
      title:'Tech News',
    },
    {
      title:'Skill-based Communities',
    },
    {
      title:'Company Communities',
    } 
  ]

}
