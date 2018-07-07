import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {Router} from '@angular/router';
import {ObjectOfView} from '../models/ObjectOfView';
import * as _ from 'underscore';
// install underscore
// https://stackoverflow.com/questions/37569537/how-to-use-underscore-js-library-in-angular-2
@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss']
})
export class GraficiComponent implements OnInit {

  ObjectID = ObjectID;
  routerLink: any;
  charts: Array<ObjectID> = [
    ObjectID.chart1, ObjectID.chart2, ObjectID.chart3,
    ObjectID.chart4, ObjectID.chart5, ObjectID.chart6,
    ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];

  data: ObjectOfView = null;

  constructor(public service: ArchitectService, public router: Router, private cdRef: ChangeDetectorRef) {
    console.dir(this.routerLink);
    this.service.dataChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('Optimize data change', result);
      this.data = result;
    });
    this.data = service.curView;
  }

  /* inserire il codice seguente dopo l'istruzine che genera l'errore di valore modificato dopo il check:
  *     this.cdRef.detectChanges();
    */

  ngOnInit() {
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

  get objectIDs() {
    const result = _.filter(this.charts,  (item) => {
      const id = item - ObjectID.chart1;
      return (this.data.chartsVisible[id]);
      // return true;
    });
    // this.cdRef.detectChanges();
    return result;
  }

  chartCounterUp(id) {
    this.service.chartClose(id);
  }

}
