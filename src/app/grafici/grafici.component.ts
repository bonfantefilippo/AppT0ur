import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import * as _ from 'underscore';
import {Router} from '@angular/router';
import {ObjectOfView} from '../models/ObjectOfView';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss']
})
export class GraficiComponent implements OnInit {
  ObjectID = ObjectID;
  data: ObjectOfView;

  charts: Array<ObjectID> = [];

  chartsVisible: Array<boolean> = [
    true, false, false,
    false, true, false,
    true, true, true];

  constructor(public service: ArchitectService, public router: Router) {
    console.log('Grafici constructor' );

/*    this.service.dataChange.subscribe((data) => {
      this.data = data;
       this.charts = [
         ObjectID.chart1, ObjectID.chart2, ObjectID.chart3,
         ObjectID.chart4, ObjectID.chart5, ObjectID.chart6,
         ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];
      this.updateOptions();
    });*/
  }

  updateOptions() {
    let charts: Array<ObjectID> = [];
    let type = 0;
    this.data.leanOptions.options.forEach(option => {
      if (option.checked) {
        type = 1;
      }
    });
    if (type) {
      this.data.digitalOptions.options.forEach(option => {
        if (option.checked) {
          type = type * 2;
        }
      });
    }
    switch (type) {
      case 0: // standard
        charts = [ObjectID.chart1];
        break;
      case 1: // lean
        charts = [ObjectID.chart2];
        break;
      case 2: // digital 1
        charts = [ObjectID.chart3];
        break;
      case 4: // digital 2
        charts = [ObjectID.chart4];
        break;
    }

    charts.concat(ObjectID.chart8, ObjectID.chart9, ObjectID.chart10);
    this.charts = charts;

  }

  ngOnInit() {

    console.log('Grafici ngOnInit enter' );

    /*this.charts = [
      ObjectID.chart1, ObjectID.chart2, ObjectID.chart3,
      ObjectID.chart4, ObjectID.chart5, ObjectID.chart6,
      ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];*/
    this.service.dataChange.subscribe( (data) => {
// https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
      console.log('Grafici ngOnInit.dataChange' );
      this.data = data;
      // this.updateOptions();
      this.charts = [
        ObjectID.chart1,
        ObjectID.chart4,
        ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];
    });
    this.service.leanChange.subscribe( (options) => {
      console.log('Grafici ngOnInit.leanChange' );
      this.charts = [
        ObjectID.chart2,
        ObjectID.chart5,
        ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];
    });
    this.service.digitalChange.subscribe( (options) => {
      console.log('Grafici ngOnInit.digitalChange' );
      this.charts = [
        ObjectID.chart3,
        ObjectID.chart6,
        ObjectID.chart7, ObjectID.chart8, ObjectID.chart9];
    });

    console.log('Grafici ngOnInit exit' );
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

  objectIDs() {
    const charts = [];
    // this.service.getChart(this.contextID)
    return _.filter(this.charts, function (item) {
      const id = item - ObjectID.chart1;
      // return (this.chartsVisible[id]);
      return true;
    });
  }

  chartCounterUp(id) {
    this.service.chartClose(id);
  }

}
