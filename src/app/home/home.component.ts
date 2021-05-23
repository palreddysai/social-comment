import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  /*Line chart data*/
  lineChartData: ChartDataSets[] = [
    { data: [10, 14, 23,36,27,21,42 ], label: 'Applications' },
    { data: [ 12, 19, 28, 37, 18,36], label: 'No. Of Applications' }
  ];


  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    Options : {
      scales: {
        xAxes: [{
          ticks: {
            min: 10,
            max: 40,
          }
        }],
        yAxes: [{
          ticks: {
            min: 10,
            max: 40,
            suggestedMin: 10,
            suggestedMax: 10
          }
        }]
      }
    }

  };

  lineChartColors: Color[] = [
    {
      borderColor: '#FC525F',
      backgroundColor: 'rgba(252, 82, 95,0.6)',
    },
    {
      borderColor: '#000',
      backgroundColor: 'transparent',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  /*doughnut*/
  doughnutChartLabels: Label[] = ['Dept1', 'Dept2', 'Dept3'];
  doughnutChartData: MultiDataSet = [
    [25 , 30, 45]
  ];

  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [
    {
      borderColor: ['#669fe6','#906cde','#FC525F'],
      backgroundColor: ['#669fe6','#906cde','rgba(252, 82, 95,0.6)']
    },

  ];


  ngOnInit(): void {
  }

}
