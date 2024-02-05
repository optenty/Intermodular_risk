import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {FooterComponent} from "../components/footer/footer.component";
import {ErrorPageComponent} from "../pages/error-page/error-page.component";
import {GraphPageComponent} from "../pages/graph-page/graph-page.component";
import {MygamesPageComponent} from "../pages/mygames-page/mygames-page.component";
import {RiskPageComponent} from "../pages/risk-page/risk-page.component";



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    ErrorPageComponent,
    GraphPageComponent,
    MygamesPageComponent,
    RiskPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    ErrorPageComponent,
    GraphPageComponent,
    MygamesPageComponent,
    RiskPageComponent
    ]
})
export class RiskModuleModule { }
