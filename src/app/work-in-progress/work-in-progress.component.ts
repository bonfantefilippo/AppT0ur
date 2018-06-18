import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {
  ObjectID = ObjectID;

  constructor(public service: ArchitectService) {
    /*this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });*/
  }

  ngOnInit() {
  }


  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }
}
