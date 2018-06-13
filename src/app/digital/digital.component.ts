import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  ObjectID = ObjectID;
  btnOttimizza1 = false;
  btnOttimizza2 = false;

  constructor(public service: StorageService) {

  }

  ngOnInit() {
  }

  onOttimizza1() {
    this.btnOttimizza1 = !this.btnOttimizza1;
    this.service.onOttimizza2({stato: this.btnOttimizza1});
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

}
