import { Component, OnInit } from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
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
  constructor(public service: ArchitectService) {
    this.service.objectMouseOver.subscribe(result => {
      this.index = result.curIndex;
      this.tip =  this.tipList.getTip(result.curIndex);
    });
  }
  ngOnInit() {
  }
  tipString() {
    return this.tip;
  }

}
