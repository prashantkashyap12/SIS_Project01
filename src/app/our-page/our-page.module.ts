import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusComponent } from './aboutus/aboutus.component';
import { LegalComponent } from './legal/legal.component';

import { AdvanceNdtComponent } from './advance-ndt/advance-ndt.component';
import { AsntComponent } from './asnt/asnt.component';
import { CswipOneComponent } from './cswip-one/cswip-one.component';
import { CswipTwoComponent } from './cswip-two/cswip-two.component';
import { BgasComponent } from './bgas/bgas.component';
import { PlacementComponent } from './placement/placement.component';
import { ContactComponent } from './contact/contact.component';
import { ResultComponent } from './result/result.component';
import { LiveNotiesComponent } from './live-noties/live-noties.component';
import { ServiceConventionalNdtComponent } from './service-conventional-ndt/service-conventional-ndt.component';
import { ServiceAdvanceNdtComponent } from './service-advance-ndt/service-advance-ndt.component';
import { ServiceEquipmentSupplyComponent } from './service-equipment-supply/service-equipment-supply.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';



@NgModule({
  declarations: [
    AboutusComponent,
    LegalComponent,
    
    AdvanceNdtComponent,
    AsntComponent,
    CswipOneComponent,
    CswipTwoComponent,
    BgasComponent,
    PlacementComponent,
    ContactComponent,
    ResultComponent,
    LiveNotiesComponent,
    ServiceConventionalNdtComponent,
    ServiceAdvanceNdtComponent,
    ServiceEquipmentSupplyComponent,
    HomeScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutusComponent,
    LegalComponent,
    AdvanceNdtComponent,
    AsntComponent,
    CswipOneComponent,
    CswipTwoComponent,
    BgasComponent,
    PlacementComponent,
    ContactComponent,
    ResultComponent,
    LiveNotiesComponent,
    ServiceConventionalNdtComponent,
    ServiceAdvanceNdtComponent,
    ServiceEquipmentSupplyComponent,
    HomeScreenComponent
  ]
})
export class OurPageModule { }
