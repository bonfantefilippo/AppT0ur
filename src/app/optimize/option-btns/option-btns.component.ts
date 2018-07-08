import {Component} from '@angular/core';
import {ArchitectService} from '../../architect.service';
import {ObjectOfView} from '../../models/ObjectOfView';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './option-btns.component.html',
  styleUrls: ['./option-btns.component.css']
})
export class OptionBtnsComponent {

  data: ObjectOfView = null;

  constructor(public service: ArchitectService) {
    this.service.viewChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('Optionbtns data change', result);
      this.data = result;
    });
    this.data = this.service.curView;
  }

  get leanStato(): boolean {
    return this.data.btnLean;
  }

  get digitalStato(): boolean {
    return this.data.btnDigital;
  }

}
