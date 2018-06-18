import { Component, OnInit } from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {ICallback} from '../models/ICallback';
import {ObjectOfView} from '../models/TreeBuilder';
import {OptionOfView, OptionType} from '../models/OptionBuilder';
import { ActivatedRoute } from '@angular/router';

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
  public css = '';
  private UID = 0;
  private lean: boolean [];
  private digital: boolean[];


  constructor(private route: ActivatedRoute, public service: ArchitectService) {
    this.service.leanChange.subscribe( result => {
      this.updateLeanOptions(result);
    });
    this.service.digitalChange.subscribe( result => {
      this.updateDigitalOptions(result);
    });
    this.service.route.subscribe( result => {
      console.log('View routed ' + result);
    });

  }
  ngOnInit() {
    this.contextID = +this.route.snapshot.paramMap.get('contextID');
    console.log('objectView ' + this.contextID);
    this.UID = this.service.registerObject(this, this.contextID);
  }
  updateLeanOptions(result: OptionOfView) {
    console.log('updateLeanOptions lean: ' + this.lean + '; digital: ' + this.digital);
    let cssResult: string = result.cssDefault;

    result.options.forEach(option => {
      if (option.checked) {
       cssResult = option.css;
     }
    });

    console.log('updateLeanOptions css: ' + cssResult);
    this.css = cssResult;
  }

  updateDigitalOptions(result: OptionOfView) {
  }



  setData(data: ObjectOfView) {
    console.log('objectView ' + this.contextID + ' setdata');
    this.data = data;
    this.css = this.data.leanOptions.cssDefault;
  }


  onDivMouseOver(index) {
    console.log('Piantina mouseover ' + index);
    this.service.onMouseOver({curIndex: index});
  }
  onClick(index) {
    console.log('Piantina click ' + index);
    this.service.onRoute(index);
  }

}
