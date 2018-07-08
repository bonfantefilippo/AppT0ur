import {Component} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {ObjectOfView} from '../models/ObjectOfView';

@Component({
  selector: 'app-topmenu',
  templateUrl: './optimize.component.html',
  styleUrls: ['./optimize.component.scss']
})
export class OptimizeComponent {

  data: ObjectOfView = null;
  constructor(public service: ArchitectService) {
    this.service.viewChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('Optimize data change', result);
      this.data = result;
    });
    this.data = this.service.curView;
  }


  /* eventi del componete */
  onLeanOver() {
    console.log('Optimize onLeanOver', ObjectID.btnLean);
    this.service.onMouseOver({curIndex: ObjectID.btnLean});
  }

  onDigitalOver() {
    console.log('Optimize onDigitalOver', ObjectID.btnDigital);
    this.service.onMouseOver({curIndex: ObjectID.btnDigital});
  }

  onLean() {
    // this.data.btnLean = !this.data.btnLean;
    this.service.onbtnLean(!this.data.btnLean);
  }

  onDigital() {
    // this.data.btnDigital = !this.data.btnDigital;
    this.service.onbtnDigital(!this.data.btnDigital);
  }
  get btnLeanState(): boolean {
    return this.data.btnLean;
  }
  get btnDigitalState(): boolean {
    return this.data.btnDigital;
  }

  /* se non ci sono opzioni Lean attivabili allora non ci sono bottoni disponibili */
  get btnLeanDisable(): boolean {
    return ! this.data.btnLeanEnable;
  }

  /* se nessuna opzione Lean è attiva allora le opzioni Digital non sono disponibili
  *  se però non esistono opzioni lean allora le opzioni digital sono disponibili */
  get btnDigitalDisable(): boolean {
    return ! this.data.btnDigitalEnable;
  }



}
