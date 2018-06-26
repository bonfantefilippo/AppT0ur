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

  // i dati vengono passati dal service se è un grafico nella barra laterale
  // se invece è nella view, il grafico se li deve prendere quando la route è
  // completa.
  // Quando il componente viene creato nella barra laterale riceve immediatamente
  // un contextID, se invece nasce nella View il contextID è notSet.
  // con contestID = notSet, dobbiamo sottoscrivere il router.events che notifica
  // l'evento NavigationEnd, momento in cui andiamo a prendere i dati
  // dall'Architect.
  setData(data: any) {
    // this.data = data.console.log('Got new data');
  }

  ngOnInit() {
    console.log('Chart ' + this.contextID + ' init: before registerObject');
    this.UID = this.service.registerObject(this, this.contextID);
    console.log('Chart ' + this.contextID + ' init: get chart');
    this.data = this.service.getDefaultChart(this.UID);
    this.data.tag = this.contextID;
    console.log('Chart ' + this.contextID + ' init: End 2');
    console.log(this.router.url);
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
    return this.data.lineChartData;
  }

  get labels() {
    return this.data.lineChartLabels;
  }

  get options() {
    /*return ChartData.notResponsiveOptions(this.data.lineChartOptions);*/
    return this.data.lineChartOptionsThumbnail;
  }

  get colors() {
    return this.data.lineChartColors;
  }

  get legend() {
    return false;
    // return this.data.lineChartLegend;
  }

  get chartType() {
    return this.data.lineChartType;
  }

}
