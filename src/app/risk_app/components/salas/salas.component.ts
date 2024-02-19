import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  public sala!: Sala ;


  ngOnInit(): void {

  }



  crearSala(){
    console.log(this.authService.getToken());
    this.riskService.crearSala(this.authService.getToken()).subscribe(response => {
      console.log(response);
      this.riskService.getSalas(this.authService.getToken());
      // Creamos la sala
    });


  }

  constructor(public riskService : RiskService, public authService : AuthService) {
  }

}
