import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {

  ObjectID = ObjectID;
  leanStato = false;
  digitalStato = false;
  grafico1 = 'grafico';
  grafico2 = 'grafico2';

  @Output() grafico = new EventEmitter();

  constructor(public service: StorageService) {
    this.service.leanClick.subscribe(res => {
      this.leanStato = res.stato;
    });
    this.service.digitalClick.subscribe(res => {
      this.digitalStato = res.stato;
    });
    this.service.grafici.subscribe(res => {
      this.grafico1 = res.first;
      this.grafico2 = res.second;
     /* return this.grafico1, this.grafico2;*/
    });
  }

  ngOnInit() {

  }

  changeClass() {
    this.service.changeClassGraphFirst();
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }

}
