import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  btnLeanState = false;
  btnDigitalState = false;

  constructor(public service: ArchitectService) {
    // this.service.leanClick.subscribe(res => {});
  }

  ngOnInit() {
  }

  onLean() {
    this.btnLeanState = !this.btnLeanState;
    this.setClass();
    this.service.onLean({stato: this.btnLeanState});
  }

  onDigital() {
    this.btnDigitalState = !this.btnDigitalState;
    this.setClass();
    this.service.onDigital({stato: this.btnDigitalState});
  }

  onLeanOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnlean});
  }

  onDigitalOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnDigital});
  }

  setClass() {
    if (!this.btnLeanState && !this.btnDigitalState) {
      this.service.changeClass({grafico1: 'grafico', grafico2: 'grafico4', grafico3: 'grafico1'});
    } else if (this.btnLeanState && !this.btnDigitalState) {
      this.service.changeClass({grafico1: 'grafico1', grafico2: 'grafico5', grafico3: 'grafico1'});
    } else if (!this.btnLeanState && this.btnDigitalState) {
      this.service.changeClass({grafico1: 'grafico2', grafico2: 'grafico6', grafico3: 'grafico1'});
    } else if (this.btnLeanState && this.btnDigitalState) {
      this.service.changeClass({grafico1: 'grafico3', grafico2: 'grafico7', grafico3: 'grafico1'});
    }
  }

}
