import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {OptionOfView, OptionType} from '../models/OptionBuilder';

@Component({
  selector: 'app-topmenu',
  templateUrl: './optimize.component.html',
  styleUrls: ['./optimize.component.scss']
})
export class OptimizeComponent implements OnInit {

  btnLeanState = null;
  btnDigitalState = null;
  btns: OptionOfView = null;
  constructor(public service: ArchitectService) {
    this.service.leanSetChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('lean set change');
      this.btns = result;
    });
    this.setLean(false);
  }

  ngOnInit() {
  }
  /* eventi del componete */
  onLeanOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnLean});
  }
  onDigitalOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnDigital});
  }
  onLean() {
    this.setLean(!this.btnLeanState);
  }
  onDigital() {
    this.setDigital(!this.btnDigitalState);
  }

  /* i cambiamenti di stato dei bottoni vengono comunicati all'Architect */
  setLean(value: boolean) {
    if (this.btnLeanState === value) {
      return;
    }
    this.btnLeanState = value;
    this.service.onLean({stato: this.btnLeanState});
    /* alla disattivazione di Lean bisogna disabilitare Digital */
    if (!this.btnLeanState) {
      this.setDigital(false);
    }
  }
  setDigital(value: boolean) {
    if (this.btnDigitalState === value) {
      return;
    }
    this.btnDigitalState = value;
    this.service.onDigital({stato: this.btnDigitalState});
  }

  /* se nessuna opzione Lean è attiva allora le opzioni Digital non sono disponibili */
  get btnDigitalDisable(): boolean {
    if (!this.btnLeanState || !this.btns.digitalEnable) {
      this.setDigital(false);
      return true;
    }
    return !this.btns.digitalEnable;
  }
}
