import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';
import {stringify} from '@angular/compiler/src/util';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  ObjectID = ObjectID;
  index: ObjectID = ObjectID.viewPiantina;

  constructor(public service: StorageService) {
    this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });
  }

  ngOnInit() {
    this.index = this.service.curView();
  }

  curIndex(temp): boolean {
    return (temp == this.index);
  }

}
