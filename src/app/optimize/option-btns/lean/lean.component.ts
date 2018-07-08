import {Component} from '@angular/core';
import {ArchitectService} from '../../../architect.service';
import {ObjectID} from '../../../models/object-id.enum';
import {OptionType} from '../../../models/OptionBuilder';
import {ObjectOfView} from '../../../models/ObjectOfView';

@Component({
  selector: 'app-lean',
  templateUrl: '../btn-array.component.html'
})
export class LeanComponent {
  ObjectID = ObjectID;
  contextID = ObjectID.btnLean;


  data: ObjectOfView = null;
  constructor(public service: ArchitectService) {
    this.service.viewChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('leanComponent data change', result);
      this.data = result;
    });
    this.data = this.service.curView;
  }
  get btns(): OptionType[] {
    return this.data.leanOptions.options;
  }

  onBtnClick(btn) {
    // btn.checked = !btn.checked;
    console.log('lean onBtnClick', btn);
    this.service.onLeanOption(btn);
  }


  onDivMouseOver(btn) {
    this.service.onMouseOver({curIndex: btn.contextID});
  }

  btnClass(btn) {
    if (btn.checked) {
      return 'backGreen';
    } else {
      return 'deactive';
    }
  }
}
