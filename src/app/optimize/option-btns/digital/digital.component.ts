import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../../../architect.service';
import {ObjectID} from '../../../models/object-id.enum';
import {OptionOfView, OptionType} from '../../../models/OptionBuilder';

@Component({
  selector: 'app-digital',
  templateUrl: '../btn-array.component.html'
  /*templateUrl: './digital.component.html'*/
})
export class DigitalComponent implements OnInit {
  ObjectID = ObjectID;
  contextID = ObjectID.btnDigital;
  btns: Array<OptionType> = [];
  leanBtns: OptionOfView = null;
  UID: number;

  constructor(public service: ArchitectService) {
    console.log('digital constructor');
    this.service.leanSetChange.subscribe(result => {
       this.leanBtns = result;
    });

    this.service.digitalSetChange.subscribe(result => {
      //   {'index': 3, 'text': 'layout', 'checked': false},
      console.log('digital set change');
      this.btns = result.options;
    });
    this.UID = this.service.registerObject(null, this.contextID);
  }

  ngOnInit() {
  }

  get btnDigitalDisable(): boolean {
    return !this.leanBtns.digitalEnable;
  }
  onBtnClick(btn) {
    btn.checked = !btn.checked;
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
