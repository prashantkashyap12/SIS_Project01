import { Component, OnInit } from '@angular/core';
import { CommonHeaderService } from 'src/app/service/common-header.service';

@Component({
  selector: 'app-live-noties',
  templateUrl: './live-noties.component.html',
  styleUrls: ['./live-noties.component.css']
})
export class LiveNotiesComponent implements OnInit {

  constructor(private serviceinstans:CommonHeaderService) { }

  ngOnInit(): void {
  }
  testAlert(){
    this.serviceinstans.alertData();
  }

}
