import {Component} from '@angular/core';
import {ArchitectService} from '../../../architect.service';
import {ObjectID} from '../../../models/object-id.enum';
import {OptionType} from '../../../models/OptionBuilder';
import {ObjectOfView} from '../../../models/ObjectOfView';

@Component({
  selector: 'app-digital',
  templateUrl: '../btn-array.component.html'
})
export class DigitalComponent {
  ObjectID = ObjectID;
  contextID = ObjectID.btnDigital;


  data: ObjectOfView = null;
  constructor(public service: ArchitectService) {
    this.service.dataChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('digitalComponent data change', result);
      this.data = result;
    });
    this.data = this.service.curView;
  }
  get btns(): OptionType[] {
    return this.data.digitalOptions.options;
  }

  onBtnClick(btn) {
    this.service.onDigitalOption(btn);
  }


  onDivMouseOver(btn) {
    this.service.onMouseOver({curIndex: btn.contextID});
  }

  btnClass(btn) {
    if (btn.checked) {
      return 'backRed';
    } else {
      return 'deactive';
    }
  }
}
