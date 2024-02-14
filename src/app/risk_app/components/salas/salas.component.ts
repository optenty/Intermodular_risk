import {Component, Input} from '@angular/core';
import {Sala} from "../../interfaces/Sala";

@Component({
  selector: 'risk-salas',
  templateUrl: './salas.component.html',
  styleUrl: './salas.component.scss'
})
export class SalasComponent {
  @Input()
  public salaList: Sala[]=[];
}
