import {Component, Input, OnInit} from '@angular/core';
import {Sala} from "../../interfaces/Sala";
import {UnaSala} from "../../interfaces/UnaSala";
import {RiskService} from "../../service/risk.service";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'risk-salas',
  templateUrl: './salas.component.html',
  styleUrl: './salas.component.scss'
})
export class SalasComponent implements OnInit{
  @Input()
  public sala: Sala[]=[];

  public salaList : UnaSala[] = [];

  ngOnInit(): void {

    let obj = JSON.stringify(this.sala);
    // @ts-ignore
    this.salaList = obj.content;

  }

  crearSala(){
    this.riskService.crearSala(this.authService.getToken()).subscribe(response => {
      console.log(response);
      // Creamos la sala
    });
  }

  constructor(public riskService : RiskService, public authService : AuthService) {
  }

}
