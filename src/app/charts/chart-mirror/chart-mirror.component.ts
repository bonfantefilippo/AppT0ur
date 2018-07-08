import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataRecord} from '../../models/ChartData';
import {ArchitectService} from '../../architect.service';
import * as Chart from 'chart.js';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-chart-mirror',
  /*templateUrl: '../charts.html',*/
  templateUrl: 'chart-mirror.component.html',
  styleUrls: ['../charts.css']
})
export class ChartMirrorComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  showChart = true;
  chart: ChartConfiguration;
  @Input()
  data: ChartDataRecord;
  private _subscription: Subscription;

  constructor(private router: Router, public service: ArchitectService) {
    console.log('Chart constructor');
    this.service.viewUnsubscribe.subscribe(() => {
      if (this.isRouteBusy()) {
        this._subscription.unsubscribe();
      }
    });
  }

  isRouteBusy() {
    return (this._subscription && !this._subscription.closed);
  }


  ngAfterViewInit(): void {
    console.log('Chart init: activateView route: subscribe', this.data);
    if (!this.isBusy()) {
      this._subscription = this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            console.log('Chart NavigationEnd:', this.service.getActiveChart(), event);
            this.showChart = false;
            this.data = this.service.getActiveChart();
            this.sleep(100);
            this.showChart = true;
            this.sleep(100);
            this.createChart();
          }
        });
    } else {
      console.log('Chart init: Route IsBusy', this.data);
    }

    console.log('chart init: after activateView route', this.data);
    // fino al momento del subscribe non riceviamo alcun evento
    // quindi andiamo a prenderci i dati subito
    this.showChart = false;
    this.data = this.service.getActiveChart();
    this.sleep(100);
    this.showChart = true;
    this.sleep(100);
    this.createChart();
  }

  createChart() {
    console.log('canvas', this.chartCanvas);
    this.context = this.chartCanvas.nativeElement.getContext('2d');

    console.log('context', this.context);
    this.chart = new Chart(this.context, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    });
  }

  isBusy() {
    return (this._subscription && !this._subscription.closed);
  }

  // events
  public chartClicked(e: any): void {
    console.log('Chart ' + this.data.chartID + ' chartClicked ObjectID.notSet isRouteBusy: ', this.isBusy());
    // qui deve chiudersi ma prima deve eliminare
    // la sottoscrizione agli eventi del router
    if (this.isBusy()) {
      // console.log('Chart ' + this.data.chartID + ' chartClicked Router.unSubscribe');
      this._subscription.unsubscribe();
    }
    // console.log('Chart ' + this.data.chartID + ' chartClicked before navigate');
    window.history.back();
    // console.log('Chart ' + this.data.chartID + ' chartClicked end');
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

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
