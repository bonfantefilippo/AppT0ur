import {Component, Input, OnInit} from '@angular/core';
import {ICallback} from '../../models/ICallback';
import {ObjectID} from '../../models/object-id.enum';
import {ChartData, ChartDataRecord} from '../../models/ChartData';
import {ArchitectService} from '../../architect.service';

import * as Chart from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-chart',
  templateUrl: '../charts.html',
  styleUrls: ['../charts.css']
})
export class AppChartComponent implements OnInit, ICallback {

  @Input()
  contextID: ObjectID; // = ObjectID.notSet;
  private UID;
  public data: ChartDataRecord;
  constructor(public service: ArchitectService, public router: Router) {
    console.log('Chart constructor');
    this.data = ChartData.voidChart();
  }


  setData(data: any) {
    // this.data = data.console.log('Got new data');
  }

  ngOnInit() {
    this.data = this.service.getChart(this.contextID);
  }

  // events
  public chartClicked(e: any): void {

    console.log('Chart ' + this.contextID + ' chartClicked', e);
    // il contenitore genera il routing verso la view e bisogna comunicare
    // al service i dati per girarli nella view
    this.service.setActiveChart(this.UID, this.data);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  get datasets() {
    if (!this.data) {return null; }
    return this.data.lineChartData;
  }

  get labels() {
    if (!this.data) {return null; }
    return this.data.lineChartLabels;
  }

  get options() {
    if (!this.data) {return null; }
    return this.data.lineChartOptionsThumbnail;
  }

  get colors() {
    if (!this.data) {return null; }
    return this.data.lineChartColors;
  }

  get legend() {
    /*if (!this.data) {return null; }*/
    return false;
    // return this.data.lineChartLegend;
  }

  get chartType() {
    if (!this.data) {return null; }
    return this.data.lineChartType;
  }

}
