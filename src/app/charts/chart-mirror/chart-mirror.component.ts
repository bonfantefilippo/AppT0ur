import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataRecord} from '../../models/AppChartData';
import {ArchitectService} from '../../architect.service';
import * as Chart from 'chart.js';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-chart-mirror',
  template:
 `<div class="gridInNine"
                  (mouseover)="chartHovered($event)"
                  (click)="chartClicked($event)">
    <canvas class="center"
            width="320" height="255"
            #chartCanvas>{{ chart }}
    </canvas>
  </div>`,
  styleUrls: ['../charts.css']
})
export class ChartMirrorComponent implements AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;

  chart;
  data: ChartDataRecord;
  private _subscription: Subscription;

  constructor(private router: Router, public service: ArchitectService, private cdRef: ChangeDetectorRef) {
    // console.log('Chart constructor');
  }

  /*  con il decorator @ViewChild aspettiamo di vedere il canvas dopo ViewInit
      in modo da poterci inserire il chart di nostra creazione, valorizzando la variabile
      NB: eliminaiamo eventuali sottoscrizioni presenti > TODO verificare se serve
      quindi sottoscriviamo chartRoute per ricevere le notifiche quando si naviga verso
      un altro grafico e poter creare la vista conseguente
      creiamo il primo grafico
   */
  ngAfterViewInit(): void {
    console.log('ChartMirror ngAfterViewInit', this.data);
    if (this.isBusy()) {
      this._subscription.unsubscribe();
    }
    this._subscription = this.service.optionsChange.subscribe( (curView) => {
      console.log('ChartMirror', curView);
      // todo: in questo punto si gestiscono i cambiamenti dovuti all'attivazione delle opzioni
      // scaricare il grafico corrente e ricaricare
    });
    this.service.chartRoute.subscribe(data => {
      this.data = data;
      this.createChart();
    });
    this.data = this.service.getActiveChart();
    this.createChart();
    // solo in questo momento serve ad evitare l'errore di cambio valore dopo il check
    this.cdRef.detectChanges();
  }

  isBusy() {
    return (this._subscription && !this._subscription.closed);
  }

  createChart() {
    console.log('createChart context', this.chartCanvas, this.context);
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(this.context, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.datasets // todo: qui bisogna passare i colori delle serie
      },
      options: this.options
    });
    this.chart.update();
  }

  // events
  public chartClicked(e: any): void {
    console.log('Chart ' + this.data.chartID + ' chartClicked ObjectID.notSet isRouteBusy: ', this.isBusy());
    /* qui il grafico deve chiudersi, lo facciamo semplicemente navigando
       verso la visualizzazione attiva
    */
    this.service.onRoute(this.service.curView.contextID);
  }

  public chartHovered(e: any): void {
    this.service.onMouseOver(this.data.chartID);
  }

  get datasets() {
    if (this.data == null) {
      return;
    }
    return this.data.lineChartData;
  }

  get labels() {
    if (this.data == null) {
      return;
    }
    return this.data.lineChartLabels;
  }

  get options() {
    if (this.data == null) {
      return;
    }
    return this.data.lineChartOptions;
  }

  get colors() {
    if (this.data == null) {
      return;
    }
    return this.data.lineChartColors;
  }

  get legend() {
    return false;
    // return this.data.lineChartLegend;
  }

  get chartType() {
    if (this.data == null) {
      return;
    }
    return this.data.lineChartType;
  }
}
