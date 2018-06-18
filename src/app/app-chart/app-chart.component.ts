import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartDataRecord} from '../models/ChartData';
import {ArchitectService} from '../architect.service';
import {ICallback} from '../models/ICallback';
import {ObjectID} from '../models/object-id.enum';


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
    console.log('Chart init');
    this.UID = this.service.registerObject(this, this.contextID);

    console.log('chart init: register route: ' + this.contextID);
    if (this.contextID == ObjectID.notSet) {

      console.log('chart init: register route: done');
      this._subscription = this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            console.log('NavigationEnd:', event);
            const response = this.service.getActiveChart();
            if (response.valid) {
              this.data = response.data;
            }
          }
        });
      // fino al momento del subscribe non riceviamo alcun evento
      // quindi andiamo a prenderci i dati subito e usciamo, per evitare
      // che i dati di default sovrascivano quelli appena ricevuti
      const result = this.service.getActiveChart();
      if (result.valid) {
        this.data = result.data;
      }
      return;
    }

    console.log('grafico in panel grafici');
    this.data = this.service.getDefaultChart(this.UID);
    this.data.tag = this.contextID;

  }

  isBusy() {
    return (this._subscription && !this._subscription.closed);
  }

  // events
  public chartClicked(e: any): void {
    console.log('Chart click on ' + this.UID);

    // se è un grafico nella view
    if (this.contextID == ObjectID.notSet) {
      // qui deve chiudersi ma prima deve eliminare
      // la sottoscrizione agli eventi del router
      if (this.isBusy()) {
        this._subscription.unsubscribe();
      }
      this.router.navigate(['home']);
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


}
