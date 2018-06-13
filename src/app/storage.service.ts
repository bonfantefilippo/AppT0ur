import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './object-id.enum';

const objMapping: ObjectID[] = [
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewMagazzino,
  ObjectID.viewPreparazione,
  ObjectID.viewLavorazione,
  ObjectID.viewFinitura,
  ObjectID.viewMagazzinoF,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
];

@Injectable()
export class StorageService {
  /* index è l'indice dell'oggetto corrente caricato nella View*/
  index: ObjectID = ObjectID.viewPiantina;
  statoOttimizza1 = false;
  statoOttimizza2 = false;

  @Output() leanClick = new EventEmitter();
  @Output() digitalClick = new EventEmitter();
  @Output() objectMouseOver = new EventEmitter();
  @Output() viewChange = new EventEmitter();
  @Output() ottimizzazione1 = new EventEmitter();
  @Output() ottimizzazione2 = new EventEmitter();
  @Output() grafici = new EventEmitter();
  @Output() graficiInView = new EventEmitter();

  classGraph1 = 'grafico';
  classGraph2 = 'grafico2';
  classGraph3 = 'grafico3';

  constructor() {
  }

  onLean(event) {
    this.leanClick.emit(event);
  }

  onDigital(event) {
    this.digitalClick.emit(event);

  }

  onOttimizza1(event) {
    this.statoOttimizza1 = event.stato;
    this.ottimizzazione1.emit(event);
  }

  onOttimizza2(event) {
    this.statoOttimizza2 = event.stato;
    this.ottimizzazione2.emit(event);
  }

  curOttimizza() {
    return {ottimizza1: this.statoOttimizza1, ottimizza2: this.statoOttimizza2};
  }
  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }

  onView(event) {
    const curIndex: ObjectID = event.curIndex;
    this.index = objMapping[curIndex];
    console.log('query ' + curIndex + ' pointTo ' + this.index);
    this.viewChange.emit({curIndex: this.index});
  }

  changeClass({grafico1: value1, grafico2: value2, grafico3: value3}) {
    this.classGraph1 = value1;
    this.classGraph2 = value2;
    this.classGraph3 = value3;
    this.grafici.emit({first: this.classGraph1, second: this.classGraph2, third: this.classGraph3});
  }

  changeClassGraphFirst() {
    const obj = {first: this.classGraph1};
    return obj;
  }

  curView() {
    return this.index;
  }
}
