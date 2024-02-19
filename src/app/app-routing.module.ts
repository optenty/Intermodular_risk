import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./risk_app/pages/home-page/home-page.component";
import {ErrorPageComponent} from "./risk_app/pages/error-page/error-page.component";
import {MygamesPageComponent} from "./risk_app/pages/mygames-page/mygames-page.component";
import {GraphPageComponent} from "./risk_app/pages/graph-page/graph-page.component";
import {RiskPageComponent} from "./risk_app/pages/risk-page/risk-page.component";
import {SalasPageComponent} from "./risk_app/pages/salas-page/salas-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path:'mygames',
    component: RiskPageComponent,
  },
  {
    path:'graph',
    component:GraphPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'lobby',
    component: SalasPageComponent,
  },
  {
    path: 'auth',
    //guards
    loadChildren: ()=> import('./risk_app/auth/auth.module').then(m=>m.AuthModule)
  },
  // {
  //   path: '**',
  //   redirectTo: "error"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
