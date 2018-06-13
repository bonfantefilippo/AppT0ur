import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';
import {TipList} from '../tip-list';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tip = '';
  index: ObjectID = ObjectID.viewPiantina;
  tipList: TipList = new TipList();
  constructor(public service: StorageService) {
    this.service.objectMouseOver.subscribe(res => {
      this.index = res.curIndex;
      this.tip =  this.tipList.getTip(res.curIndex);
    });
  }
  ngOnInit() {
  }
  tipString() {
    return this.tip;
  }

}
