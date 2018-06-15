import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {ChartData, ChartDataRecord} from '../models/ChartData';

@Component({
  selector: 'app-graph10',
  templateUrl: './graph10.component.html'
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
