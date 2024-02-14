import {Component, OnInit} from '@angular/core';
import {RiskService} from "../../service/risk.service";
import {Sala} from "../../interfaces/Sala";

@Component({
  selector: 'app-salas-page',
  templateUrl: './salas-page.component.html',
  styleUrl: './salas-page.component.scss'
})
export class SalasPageComponent implements OnInit{

  constructor(public riskService: RiskService) {
  }

  ngOnInit() {
    this.salasApi();
  }

  public salas: Sala[]=[];

  public salasPrueba: Sala[] = [
    {
      "id_sala": 1,
      "jugador1": 12512312312,
      "jugador2": 0,
      "jugador3": 0,
      "jugador4": 0,
    },
    {
      "id_sala": 2,
      "jugador1": 21,
      "jugador2": 5,
      "jugador3": 23123,
      "jugador4": 5123123123,
    }
  ]
  salasApi(){
    // @ts-ignore
    this.salas = this.riskService.getSalas;
  }

}
