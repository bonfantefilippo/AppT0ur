import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {ObjectOfView} from '../models/ObjectOfView';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss']
})
export class GraficiComponent implements OnInit {
  show = false;
  ObjectID = ObjectID;
  data: ObjectOfView;
  charts: Array<ObjectID> = [ObjectID.chart1, ObjectID.chart2, ObjectID.chart3, ObjectID.chart8, ObjectID.chart9, ObjectID.chart10];

  constructor(public service: ArchitectService) {
    console.log('grafici constructor');

/*    this.service.dataChange.subscribe((data) => {

      console.log('grafici constructor dataChange', data);
      this.data = data;
      this.service.leanChange.subscribe(() => {
        console.log('grafici constructor leanChange', data);
        this.updateOptions();
      });
      this.service.digitalChange.subscribe(() => {
        console.log('grafici constructor digitalChange', data);
        this.updateOptions();
      });
      console.log('grafici constructor updateOptions', data);
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
    this.show = true;

  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

}
