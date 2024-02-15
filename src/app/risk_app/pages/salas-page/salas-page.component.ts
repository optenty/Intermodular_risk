import {Component, OnInit} from '@angular/core';
import {RiskService} from "../../service/risk.service";
import {Sala} from "../../interfaces/Sala";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-salas-page',
  templateUrl: './salas-page.component.html',
  styleUrl: './salas-page.component.scss'
})
export class SalasPageComponent implements OnInit{


  public token: string | null = null;


  constructor(public riskService: RiskService, public authService: AuthService) {

    this.token = authService.getToken();
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
    this.salas = this.riskService.getSalas(this.token);
  }

}
