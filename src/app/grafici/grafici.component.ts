import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {Router} from '@angular/router';
import {ChartDataRecord} from '../models/ChartData';
// install underscore
// https://stackoverflow.com/questions/37569537/how-to-use-underscore-js-library-in-angular-2
@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss']
})
export class GraficiComponent implements OnInit {
  charts: ChartDataRecord[] = [];

/*  get charts() {
    /!*const result = _.filter(this._charts, (item) => {
      const id = item - ObjectID.chart1;
      return (this.data.chartsVisible[id]);
      // return true;
    });*!/
    return this._charts;
  }*/

  constructor(public service: ArchitectService, public router: Router, private cdRef: ChangeDetectorRef) {
    /* inserire il codice seguente dopo l'istruzine che genera l'errore di valore modificato dopo il check:
    *     this.cdRef.detectChanges();      */

    this.charts = this.service.visibleCharts;
    // this.cdRef.detectChanges();

  }

  ngOnInit() {
    this.service.optionsChange.subscribe(() => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('Grafici charts change');
      this.charts = this.service.visibleCharts;
      // this.cdRef.detectChanges();
    });
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }


  onChartClick(id) {
    // this.service.chartClose(id);
  }

}
