import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartDataRecord} from '../models/ChartData';
import {ArchitectService} from '../architect.service';
import {ICallback} from '../models/ICallback';
import {ObjectID} from '../models/object-id.enum';
import * as Chart from 'chart.js';

import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';


// import {filter} from 'rxjs/internal/operators';

// per intercettare gli eventi di routing
// https://toddmotto.com/dynamic-page-titles-angular-2-router-events
// compatibilità rxjs
// https://github.com/shlomiassaf/ngx-modialog/issues/426
@Component({
  selector: 'app-app-chart',
  templateUrl: './app-chart.component.html',
  styleUrls: ['./app-chart.component.css']
})
export class AppChartComponent implements OnInit, ICallback {

  @Input()
  contextID: ObjectID = ObjectID.notSet;
  private _subscription: Subscription;
  private UID;
  public data: ChartDataRecord;
  myChart; // This will hold our chart info
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public service: ArchitectService) {
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
    this.paintChart();
    console.log('Chart ' + this.contextID + ' init: before registerObject');
    this.UID = this.service.registerObject(this, this.contextID);

    console.log('Chart ' + this.contextID + ' init: before register route');
    if (this.contextID == ObjectID.notSet) {

      console.log('Chart ' + this.contextID + ' init: register route: subscribe ');
      if (!this.isBusy()) {
        this._subscription = this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            console.log('Chart ' + this.contextID + ' NavigationEnd: ' , event);
            const response = this.service.getActiveChart();
            if (response.valid) {
              this.data = response.data;
            }
          }
        });
      }
      // fino al momento del subscribe non riceviamo alcun evento
      // quindi andiamo a prenderci i dati subito e usciamo, per evitare
      // che i dati di default sovrascivano quelli appena ricevuti

      console.log('chart ' + this.contextID + ' init: after register route');
      const result = this.service.getActiveChart();
      if (result.valid) {
        this.data = result.data;
      }
      console.log('Chart ' + this.contextID + ' init: End 1');
      return;
    }

    console.log('Chart ' + this.contextID + ' init: get chart');
    this.data = this.service.getDefaultChart(this.UID);
    this.data.tag = this.contextID;
    console.log('Chart ' + this.contextID + ' init: End 2');

  }

  isBusy() {
    return (this._subscription && !this._subscription.closed);
  }

  // events
  public chartClicked(e: any): void {

    console.log('Chart ' + this.contextID + ' chartClicked', e);

    // se è un grafico nella view
    if (this.contextID == ObjectID.notSet) {

      console.log('Chart ' + this.contextID + ' chartClicked ObjectID.notSet isBusy: ', this.isBusy());
      // qui deve chiudersi ma prima deve eliminare
      // la sottoscrizione agli eventi del router
      if (this.isBusy()) {
        console.log('Chart ' + this.contextID + ' chartClicked Router.unSubscribe');
        this._subscription.unsubscribe();
      }
      console.log('Chart ' + this.contextID + ' chartClicked before navigate');
      this.router.navigate(['home']);
      console.log('Chart ' + this.contextID + ' chartClicked end');
      return;
    }


    // non è un rafico nella view ma nel pannello dei grafici
    // il contenitore genera il routing verso la view e bisogna comunicare
    // al service i dati per girarli nella view
    this.service.setActiveChart(this.UID, this.data);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  private paintChart() {
    /*/!*let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');*!/
    const ctx = document.getElementById('canvas').getContext('2d');
     this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });*/
  }
}
