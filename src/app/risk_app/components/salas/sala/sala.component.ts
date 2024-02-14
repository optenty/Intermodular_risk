import {Component, Input} from '@angular/core';
import {Sala} from "../../../interfaces/Sala";

@Component({
  selector: 'risk-sala',
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.scss'
})
export class SalaComponent {

   @Input()
   public sala!: Sala;
}
