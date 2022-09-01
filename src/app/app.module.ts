import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
;
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { OurPageModule } from './our-page/our-page.module';







@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    FooterModule,
    OurPageModule
  ],

  providers: [
    

  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
