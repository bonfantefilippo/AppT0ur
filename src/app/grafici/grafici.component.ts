import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {

  ObjectID = ObjectID;

  constructor(public service: ArchitectService) {
  }

  ngOnInit() {
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

}
