import { Component } from '@angular/core';

@Component({
  selector: 'risk-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {

  // @ts-ignore
  puedeAtacar(zona){

    switch (zona){
      case "nordAmerica":
        console.log(zona);
        break;
      case "europa":
        console.log(zona);
        break;
      case "oceania":
        console.log(zona);
        break;
      case "africa":
        console.log(zona);
        break;
      case "sudAmerica":
        console.log(zona);
        break;
      case "asia":
        console.log(zona);
        break;
    }


  }

}
