import { Component } from '@angular/core';
import {RiskService} from "../../service/risk.service";
import {Sala} from "../../interfaces/Sala";

@Component({
  selector: 'app-salas-page',
  templateUrl: './salas-page.component.html',
  styleUrl: './salas-page.component.scss'
})
export class SalasPageComponent {

  constructor(public riskService: RiskService) {
  }
  public salasPrueba: Sala[] = [
    {
      "id_sala": 1,
      "jugador1": 0,
      "jugador2": 0,
      "jugador3": 0,
      "jugador4": 0,
    },
    {
      "id_sala": 2,
      "jugador1": 0,
      "jugador2": 0,
      "jugador3": 0,
      "jugador4": 0,
    }
  ]
  // get salasPrueba(){
  //   return this.riskService.getSalasPrueba;
  // }

}
