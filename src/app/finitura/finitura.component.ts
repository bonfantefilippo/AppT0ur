import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-finitura',
  templateUrl: './finitura.component.html',
  styleUrls: ['./finitura.component.css']
})
export class FinituraComponent implements OnInit {
  ObjectID = ObjectID;
  constructor(public service: StorageService) {
    /*this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });*/
  }

  ngOnInit() {
  }
  onDivClick(index) {
    this.service.onView({curIndex: index});
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }
}
