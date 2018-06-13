import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-lean',
  templateUrl: './lean.component.html',
  styleUrls: ['./lean.component.css']
})
export class LeanComponent implements OnInit {
  ObjectID = ObjectID;
  btnOttimizza1 = false;
  btnOttimizza2 = false;

  btn1 = 'active';

  constructor(public service: StorageService) {

  }

  ngOnInit() {
  }

  onOttimizza1() {
    this.btnOttimizza1 = !this.btnOttimizza1;
    this.service.onOttimizza1({stato: this.btnOttimizza1});
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

}
