import {Component, OnInit} from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrl: './graph-page.component.scss'
})
export class GraphPageComponent implements OnInit{
  myChart: any;

  constructor() { }

  ngOnInit(): void {
    this.generarGrafico();
  }

  generarGrafico() {
    const jugadores = ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4'];
    const datos = jugadores.map(() => Math.floor(Math.random() * 100) + 1);

    this.myChart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: jugadores,
        datasets: [{
          label: 'Porcentaje de tropas',
          data: datos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  addClickEvent() {
    const canvas = this.myChart.canvas;
    // @ts-ignore
    canvas.onclick = (event) => {
      const activePoints = this.myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (activePoints.length > 0) {
        const clickedDatasetIndex = activePoints[0].datasetIndex;
        const clickedElementIndex = activePoints[0].index;
        const dataset = this.myChart.data.datasets[clickedDatasetIndex];
        const value = dataset.data[clickedElementIndex];
        console.log(`Clicked: ${dataset.label} - Value: ${value}`);
      }
    };
  }

}
