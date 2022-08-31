import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './our-page/aboutus/aboutus.component';
import { LegalComponent } from './our-page/legal/legal.component';

import { AdvanceNdtComponent } from './our-page/advance-ndt/advance-ndt.component';
import { AsntComponent } from './our-page/asnt/asnt.component';
import { CswipOneComponent } from './our-page/cswip-one/cswip-one.component';
import { CswipTwoComponent } from './our-page/cswip-two/cswip-two.component';
import { BgasComponent } from './our-page/bgas/bgas.component';
import { PlacementComponent } from './our-page/placement/placement.component';
import { ContactComponent } from './our-page/contact/contact.component';
import { ResultComponent } from './our-page/result/result.component';
import { LiveNotiesComponent } from './our-page/live-noties/live-noties.component';
import { ServiceConventionalNdtComponent } from './our-page/service-conventional-ndt/service-conventional-ndt.component';
import { ServiceAdvanceNdtComponent } from './our-page/service-advance-ndt/service-advance-ndt.component';
import { ServiceEquipmentSupplyComponent } from './our-page/service-equipment-supply/service-equipment-supply.component';
import { HomeScreenComponent } from './our-page/home-screen/home-screen.component';





const routes: Routes = [
  {path: 'Aboutus', component: AboutusComponent },
  {path: 'Legal-page', component: LegalComponent },
  {path: 'AdvanceNdt', component:AdvanceNdtComponent},
  {path: 'asnt', component:AsntComponent},
  {path: 'CswipOne', component:CswipOneComponent},
  {path: 'CswipTwo', component: CswipTwoComponent},
  {path: 'Bgas', component:BgasComponent},
  {path: 'Placement', component:PlacementComponent},
  {path: 'Contact', component:ContactComponent},
  {path: 'Result', component:ResultComponent},
  {path: 'LiveNoties', component:LiveNotiesComponent},
  {path: 'ConventionalNdt', component:ServiceConventionalNdtComponent},
  {path: 'AdvanceNdtComponent', component:ServiceAdvanceNdtComponent},
  {path: 'EquipmentSupply', component:ServiceEquipmentSupplyComponent},
  {path: '**', component:HomeScreenComponent},



  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
