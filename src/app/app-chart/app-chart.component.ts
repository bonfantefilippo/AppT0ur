import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartDataRecord} from '../models/ChartData';
import {ArchitectService} from '../architect.service';
import {ICallback} from '../models/ICallback';

@Component({
  selector: 'app-app-chart',
  templateUrl: './app-chart.component.html',
  styleUrls: ['./app-chart.component.css']
})
export class AppChartComponent implements OnInit, ICallback {


  @Input()
  contextID = -1;

  private UID = 0;
  public data: ChartDataRecord;

  constructor(public service: ArchitectService) {
    console.log('Chart constructor');
    this.data = ChartData.voidChart();
  }

  ngOnInit() {
    console.log('Chart init');
    this.UID = this.service.registerObject(this, this.contextID);

    if (this.contextID) {
      console.log('grafico in panel grafici');
      this.data = this.service.getDefaultChart(this.UID);
      this.data.tag = this.contextID;
    } else {
      this.service.graficiInView.subscribe( data => {
        console.log('grafico in view new event data');
        this.data = data;
      });
    }
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

  setData(data: any) {
  }

}
