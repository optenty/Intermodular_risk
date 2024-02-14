import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RiskModuleModule} from "./risk_app/risk-module/risk-module.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

import {AuthRoutingModule} from "./risk_app/auth/auth-routing.module";
import { GraphPageComponent } from './risk_app/pages/graph-page/graph-page.component';
import { MygamesPageComponent } from './risk_app/pages/mygames-page/mygames-page.component';
import { RiskPageComponent } from './risk_app/pages/risk-page/risk-page.component';
import { SalasComponent } from './risk_app/components/salas/salas.component';
import { SalasPageComponent } from './risk_app/pages/salas-page/salas-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SalasComponent,
    SalasPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiskModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
