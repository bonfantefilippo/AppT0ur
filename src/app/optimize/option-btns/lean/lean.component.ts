import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../../../architect.service';
import {ObjectID} from '../../../models/object-id.enum';
import {OptionType} from '../../../models/OptionBuilder';

@Component({
  selector: 'app-lean',
  templateUrl: '../btn-array.component.html'
})
export class LeanComponent implements OnInit {
  ObjectID = ObjectID;
  contextID = ObjectID.btnLean;
  btns: Array<OptionType> = [];

  constructor(public service: ArchitectService) {
    console.log('lean constructor');
    this.service.leanSetChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('lean set change', result.options);
      this.btns = result.options;
    });
    this.service.registerOptimizer( this.contextID);
  }

  ngOnInit() {
  }

  onBtnClick(btn) {
    btn.checked = !btn.checked;
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
