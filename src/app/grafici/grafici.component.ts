import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {Router} from '@angular/router';

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
  chartsVisible: Array<boolean> = [
    false, true, false,
    false, true, false,
    true, true, true];

  constructor(public service: ArchitectService, public router: Router) {
    console.dir(this.routerLink);
  }

  ngOnInit() {
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

/*  objectIDs() {
    return _.filter(this.charts, function (item) {
      const id = item - ObjectID.chart1;
      // return (this.chartsVisible[id]);
      return true;
    });
  }*/

  chartCounterUp(id) {
    this.service.chartClose(id);
  }

}
