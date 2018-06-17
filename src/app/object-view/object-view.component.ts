import { Component, OnInit } from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {ICallback} from '../models/ICallback';
import {ObjectOfView} from '../models/TreeBuilder';

@Component({
  selector: 'app-piantina',
  templateUrl: './object-view.component.html',
  styleUrls: ['./stylePiantina.scss',
              './styleMagazzino.scss']
})
export class ObjectViewComponent implements OnInit, ICallback {
  ObjectID = ObjectID;
  contextID: ObjectID = ObjectID.notSet;
  data: ObjectOfView ;
  private UID = 0;
  private classIndex = 1;
  constructor(public service: ArchitectService) {
    this.contextID = ObjectID.viewPiantina;
    console.log('objectView ' + this.contextID + ' constructor');

    this.UID = this.service.registerObject(this, this.contextID);
    /*this.data = [];
    this.data.push({'routerLink': '/magazzino', 'childId': 'child1', 'contextID': ObjectID.piantinaChild1});
    this.data.push({'routerLink': '/preparazione', 'childId': 'child2', 'contextID': ObjectID.piantinaChild2});
    this.data.push({'routerLink': '/lavorazione', 'childId': 'child3', 'contextID': ObjectID.piantinaChild3});
    this.data.push({'routerLink': '/finitura', 'childId': 'child4', 'contextID': ObjectID.piantinaChild4});
    this.data.push({'routerLink': '/magazzinofinale', 'childId': 'child5', 'contextID': ObjectID.piantinaChild5});*/

  }
  setData(data: ObjectOfView) {
    console.log('objectView ' + this.contextID + ' setdata');
    this.data = data;
  }
  ngOnInit() {
    console.log('objectView ' + this.contextID + ' init');
    // this.service.setContext(this.contextID);
  }
 onDivClick(index) {
   this.classIndex++;
  }
  get classOptimized () {
    return this.data.classByIndex(this.classIndex);
  }
  onDivMouseOver(index) {
    console.log('Piantina mouseover ' + index);
    this.service.onMouseOver({curIndex: index});
  }

}
