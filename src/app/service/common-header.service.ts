import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonHeaderService {

  constructor() { }

  alertData(){
    alert('Hello Service, kesi ho')
  }
  product = "Laptop"
}
