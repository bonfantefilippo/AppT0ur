import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import * as _ from 'underscore';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {

  ObjectID = ObjectID;
  charts: Array<ObjectID> = [
    ObjectID.chart1, ObjectID.chart2, ObjectID.chart3,
    ObjectID.chart4, ObjectID.chart5, ObjectID.chart6,
    ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];
  chartsVisible: Array<boolean> = [
    false, true, false,
    false, true, false,
    true, true, true];
  constructor(public service: ArchitectService) {
  }

  ngOnInit() {
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

  objectIDs() {

      return _.filter(this.charts, function(item) {
        const id = item - ObjectID.chart1;
        // return (this.chartsVisible[id]);
        return true;
      });

  }

}
