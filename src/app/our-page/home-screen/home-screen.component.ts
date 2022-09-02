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
      "ImagePath":"../../../assets/our-service/we-offer-practice-icon.png",
      title:'Practice Problems',
    },
    {
      "ImagePath":"../../../assets/our-service/we-offer-challenge-icon.png",    
      title:'Challenges & Hackathons',
    },
    {
      "ImagePath":"../../../assets/our-service/we-offer-skill-icon.png",
      title:'Skill Tests',
    },
    { 
      "ImagePath":"../../../assets/our-service/we-offer-job-icon.png",
      title:'Webinars',
    },
    {
      "ImagePath":"../../../assets/our-service/we-offer-news-icon.png",

      title:'Tech News',
    },
    {
      "ImagePath":"../../../assets/our-service/we-offer-webinar-icon.png",
      title:'Skill-based Communities',
    },
    {
      "ImagePath":"../../../assets/our-service/we-offer-company-icon.png",
      title:'Company Communities',
    } 
  ]
  
  dataUrl:any= './Contact'
  whatweare ={
    "whatWeimg":"../../../assets/whatweare.png",
  }


  newsdata = [
    {
      mainheading:'Regression Analysis-2',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Regression Analysis',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Basic Hypothesis Testing',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Hypothesis Testing',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Basic Inferential Statistics',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Inferential Statistics',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Basic Statistics',
      pera:'Takes 20 minutes to solve',
    },
    {
      mainheading:'Descriptive Statistics Fundamentals',
      pera:'Takes 20 minutes to solve',
    },
  ]
  classroom = [
    {
      name : 'ASNT_NDT-II_COURSES',
    },
    {
      name : 'ADVANCED_NDT',
    },
    {
      name : 'WELDING_INSPECTOR_CSWIP_3.1',
    },
    {
      name : 'WELDING_CSWIP_3.2',
    },
    {
      name : 'PAINTING_INSPECTO_RBGAS_G-2',
    },
  ]

}
