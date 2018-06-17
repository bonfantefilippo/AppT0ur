import { Component, OnInit } from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
/*  ObjectID = ObjectID;
  index: ObjectID = ObjectID.viewPiantina;

  constructor(public service: ArchitectService) {
    this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });
  }
*/
  ngOnInit() {
    // this.index = this.service.curView();
  }

}

















