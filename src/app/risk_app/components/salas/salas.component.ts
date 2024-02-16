import {Component, Input, OnInit} from '@angular/core';
import {Sala} from "../../interfaces/Sala";
import {UnaSala} from "../../interfaces/UnaSala";

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

}
