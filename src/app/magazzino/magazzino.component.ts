import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {
  ObjectID = ObjectID;
  classe = 'magazzino2';
  backGround = 'tradizionale';
  ottimizza1 = false;
  ottimizza2 = false;
  constructor(public service: StorageService) {
    this.service.ottimizzazione1.subscribe(res => {
      /*this.setOttimizza(res.stato);*/
      this.ottimizza1 = res.stato;
      this.setClass();
    });
    this.service.ottimizzazione2.subscribe(res => {
      /*this.setOttimizza(res.stato);*/
      this.ottimizza2 = res.stato;
      this.setClass();
    });
  }

  ngOnInit() {
    let obj = this.service.curOttimizza();
    this.ottimizza1 = obj.ottimizza1;
    this.ottimizza2 = obj.ottimizza2;
    /*this.setOttimizza(obj.ottimizza1);*/
    this.setClass();
  }

  getIndex() {
    const iLean = this.ottimizza1 ? 1 : 0; // lean
    const iDigital = this.ottimizza2 ? 1 : 0; // digital
    return iLean + iDigital * 2;
  }
  setClass() {
    const i = this.getIndex();
    const _classe = ['magazzino2', 'magazzino1', 'magazzino2', 'magazzino1'];
    const _backGround = ['tradizionale', 'lean', 'digital', 'all'];
    /*this.service.changClass({grafico1:aGrafici1[i], grafico2:aGrafici2[i]});*/
    this.classe = _classe[i];
    this.backGround = _backGround[i];
  }
  setOttimizza(stato) {
    if (!stato) {
      this.classe = 'magazzino2';
      this.backGround = 'tradizionale';
    } else {
      this.classe = 'magazzino1';
      this.backGround = 'lean';
    }
  }

  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }
}
