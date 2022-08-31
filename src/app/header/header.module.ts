import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent
  ],
  
  imports: [
    CommonModule
  ],
  
  exports: [
    NavbarComponent,
    SliderComponent
  ]

})
export class HeaderModule { }
