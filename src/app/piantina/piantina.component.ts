import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-piantina',
  templateUrl: './piantina.component.html',
  styleUrls: ['./piantina.component.css']
})
export class PiantinaComponent implements OnInit {
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
