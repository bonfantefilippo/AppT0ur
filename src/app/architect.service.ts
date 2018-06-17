import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './models/object-id.enum';
import {ChartData, ChartDataRecord} from './models/ChartData';
import {ICallback} from './models/ICallback';
import {TreeOfView} from './models/TreeBuilder';

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
const _treeOfView = new TreeOfView();
@Injectable()
export class ArchitectService {
  /*
    index è l'indice DI CONTESTO  dell'oggetto corrente caricato nella View
    ogni oggetto rappresenta un contesto specifico e il suo indice di contesto
    permette di recupersre il record con i parametri necessari ad una corretta
    visualizzazione.
   */
  index: ObjectID = ObjectID.viewPiantina;

  /*
    Unique Identifier: utilizzato per identificare in maniera univoca
    ogni oggetto dell'applicazione, nel momento della costruzione l'oggetto
    riceve il service per iniezione e gli richiede il proprio UID
    Il service memorizza l'associazione tra l'oggetto e l'UID, nelle chiamate
    successive l'UID permette al service di identificare l'oggetto e scegliere
    eventuali opzioni di comportamento e/o personalizzazione
    UID viene incrementato ad ogni chiamata
   */
  private _UID = 0;

  /*
    Nell'oggetto ChartData sono definiti tutti i grafici disponibili.
    Quando viene creato il componente graficoX, il service gli passa i dati contenuti
    nello specifico record di _chartData
   */
  private _chartData = new ChartData();

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
  registeredObjects: Array<any> = [];

  /*
    quando si fa il click su uno dei grafici di sinistra memorizziamo le informazioni relative
    in modo che quando viene eseguito il routing il componente caricato nella view
    possa accedere alle informazioni relative
    Quando nella view viene caricato qualcosaltro la _activeChart deve essere annullata
   */
  private _activeChart: { UID: number; data: ChartDataRecord; valid: boolean} = {UID: 0, data: null, valid: false};

  constructor() {
  }

  registerObject(caller: ICallback, contextID: number) {
    /*
      quando contextID = -1 l'oggetto viene creato da un routing

      Il click su un grafico a sinistra salva la _activeChart e spara un routing

      Il grafico mostrato nella view chiede al service i suoi dati
      il service vede contextID = -1 e gli da quelli nella _activeChart,
      quindi annulla la _activeChart per evitare di sparare altri dati ad oggetti
      che non sono titolati a riceverli
     */
    const UID = ++this._UID;
    console.log('registering ' + UID  + ', context: ' + contextID);
    this.registeredObjects.push({
      'caller': caller,
      'contextID': contextID,
      'UID': UID
    });


    /*const objs = [];
    objs.push({'routerLink': '/magazzino', 'childId': 'child1', 'contextID': ObjectID.piantinaChild1});
    objs.push({'routerLink': '/preparazione', 'childId': 'child2', 'contextID': ObjectID.piantinaChild2});
    objs.push({'routerLink': '/lavorazione', 'childId': 'child3', 'contextID': ObjectID.piantinaChild3});
    objs.push({'routerLink': '/finitura', 'childId': 'child4', 'contextID': ObjectID.piantinaChild4});
    objs.push({'routerLink': '/magazzinofinale', 'childId': 'child5', 'contextID': ObjectID.piantinaChild5});

    const data = {'class': 'sfondoBasePiantina', 'objects': objs};
    caller.setData(data);*/

  caller.setData(_treeOfView.data[0]);


    return UID;
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

  setContext(contextID: ObjectID) {
    this.index = contextID;
  }

  onView(event) {
    const curIndex: ObjectID = event.curIndex;
    this.index = objMapping[curIndex];
    console.log('query ' + curIndex + ' pointTo ' + this.index);
    this.viewChange.emit({curIndex: this.index});
  }

  curView() {
    return this.index;
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

  getRandomChart() {
    const chartIndex = Math.floor(Math.random() * this._chartData.getCount());
    console.log('getRandonChart: ' + chartIndex + ' of ' + this._chartData.getCount());
    return this._chartData.getChart(chartIndex);
  }

  getDefaultChart(UID: number) {
    if (UID === this._activeChart.UID && this._activeChart.valid) {
      console.log('Show chart in view with UID ' + UID);
      this._activeChart.valid = false;
      return this._activeChart.data.clone();
    }
    // return this._chartData.getChart(0);
    return this.getRandomChart();
  }

  setActiveChart(UID: number, data: ChartDataRecord) {
    console.log('setActiveChart ' + UID);
    this._activeChart = {'UID': UID, 'data': data, 'valid': true};
    this.graficiInView.emit(data);
  }
}
