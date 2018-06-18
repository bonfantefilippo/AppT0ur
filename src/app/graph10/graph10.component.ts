

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';



@Component({
  selector: 'app-graph10',
  templateUrl: './graph10.component.html',
})

export class Graph10Component  implements OnInit {


  @Input()
  contextID = -1;

  private UID = 0;
  public data: ChartDataRecord;

  constructor(public service: StorageService) {
    console.log('Chart constructor')
    this.data = ChartData.voidChart();
   }

  ngOnInit() {
    console.log('Chart init')
    this.UID = this.service.registerObject(this, this.contextID);
    if (this.contextID === -1) {
      this.service.graficiInView.subscribe( data => {
        console.log('grafico in view new event data');
        this.data = data;
      });
    }
    this.data = this.service.getDefaultChart(this.UID);
  }

export class Graph10Component implements OnInit {
  // lineChart
  @Output() grafico = new EventEmitter();

  ObjectID = ObjectID;
  leanStato = false;
  digitalStato = false;
  grafico1 = 'grafico';
  grafico2 = 'grafico2';
  grafico3 = 'grafico3';

  constructor(public service: StorageService) {
    this.service.leanClick.subscribe(res => {
      this.leanStato = res.stato;
    });
    this.service.digitalClick.subscribe(res => {
      this.digitalStato = res.stato;
    });
    this.service.grafici.subscribe(res => {
      this.grafico1 = res.first;
      this.grafico2 = res.second;
      this.grafico3 = res.third;
    });
  }
  public lineChartData: Array<any> = [
    {data: [75, 89, 80, 81, 86, 85, 90, 50], label: 'Standard'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Lean'},
    {data: [78, 48, 77, 9, 100, 27, 40], label: 'Digital'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  public randomize(): void {
    console.log('Chart ' + this.contextID + ' query random chart');
    // const newData = this.service.getRandomChart();
    // this.data = newData;
     this.data = this.service.getRandomChart();
  }

  // events
  public chartClicked(e: any): void {
    console.log('Chart click on ' + this.UID);
    this.service.setActiveChart(this.UID, this.data);
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
