import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './models/object-id.enum';
import {ChartData, ChartDataRecord} from './models/ChartData';
import {ICallback} from './models/ICallback';
import {TreeOfView} from './models/TreeBuilder';
import {OptionOfView, OptionType} from './models/OptionBuilder';
import {Router} from '@angular/router';
import {NodeOfView, ObjectOfView} from './models/ObjectOfView';


const _treeOfView = new TreeOfView();

@Injectable()
export class ArchitectService {
  private rndChartIndex = 0;
  /*
    index è l'indice DI CONTESTO  dell'oggetto corrente caricato nella View
    ogni oggetto rappresenta un contesto specifico e il suo indice di contesto
    permette di recupersre il record con i parametri necessari ad una corretta
    visualizzazione.
   */
  index: ObjectID = ObjectID.viewPiantinaAngus;

  chartCounter = 0;

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


  /*
  * Nel Top menu vengono abilitate le opzioni
  * nel Bottom menu si scelgono le opzioni da usare
  * Il Top menu genera _onClick, e chiama Architect.onLean(),
  * Architect genera __leanClick() che arriva al Bottom menu
  * Il Bottom menu usa i dati per disegnare i bottoni, con i relativi stati di attivazione
  *
  * Il click su un bottone del bottom menu genera _leanOption e l'Architect informa i consumer
  * con _leanChange
  */
  @Output() leanChange = new EventEmitter();
  @Output() digitalChange = new EventEmitter();
  @Output() dataChange = new EventEmitter();
  @Output() objectMouseOver = new EventEmitter();
  @Output() route = new EventEmitter();


  registeredObjects: Array<any> = [];

  /*
    quando si fa il click su uno dei grafici di sinistra memorizziamo le informazioni relative
    in modo che quando viene eseguito il routing il componente caricato nella view
    possa accedere alle informazioni relative
    Quando nella view viene caricato qualcosaltro la _activeChart deve essere annullata
   */
  private _activeChart: { UID: number; data: ChartDataRecord; valid: boolean } = {UID: 0, data: null, valid: false};


  constructor(public router: Router) {
  }


  registerChart(caller: ICallback, contextID: number) {
    /*
      quando contextID = -1 l'oggetto viene creato da un routing

      Il click su un grafico a sinistra salva la _activeChart e spara un routing

      Il grafico mostrato nella view chiede al service i suoi dati
      il service vede contextID = -1 e gli da quelli nella _activeChart,
      quindi annulla la _activeChart per evitare di sparare altri dati ad oggetti
      che non sono titolati a riceverli
     */
    if (!_treeOfView.data[contextID]) {
      console.log('registering object of context: ' + contextID + ' enter', contextID, caller);
      return -1;
    }


    if (!caller) {
      return -1;
    }
    this.index = contextID;
    const UID = ++this._UID;
    this.registeredObjects.push({
      'caller': caller,
      'contextID': contextID,
      'UID': UID
    });
    console.log('registering object of context: ' + contextID + ' set data', _treeOfView.data[contextID]);
    caller.setData(_treeOfView.data[contextID]);

    console.log('registering object of context: ' + contextID + ' return', _treeOfView.data[contextID]);
    this.dataChange.emit(_treeOfView.data[contextID]);
    return UID;
  }
  get curView(): ObjectOfView {
    return _treeOfView.data[this.index];
  }
  registerObject(contextID: number): ObjectOfView {

    if (!_treeOfView.data[contextID]) {
      console.log('registering object of context: ' + contextID + ' enter', contextID);
      return null;
    }
    console.log('registering object of context: ' + contextID + ' enter', _treeOfView.data[contextID]);
    this.index = contextID;

    console.log('registering object of context: ' + contextID + ' set change', _treeOfView.data[contextID]);
    this.dataChange.emit(_treeOfView.data[contextID]);

    console.log('registering object of context: ' + contextID + ' set data', _treeOfView.data[contextID]);
    return _treeOfView.data[contextID];
  }


  onLeanOption(btn) {
    console.log('service onBtnClick');
    _treeOfView.data[this.index].setBtnLeanOption(btn.contextID);

    this.leanChange.emit(_treeOfView.data[this.index].leanOptions);
  }

  onDigitalOption(btn) {
    _treeOfView.data[this.index].setBtnDigitalOption(btn.contextID);
    this.digitalChange.emit(_treeOfView.data[this.index].digitalOptions);
  }

  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }

  onRoute(contextID: ObjectID) {
    console.log('onRoute Routing to ' + contextID);
    _treeOfView.data[contextID].setActive();
    console.log('onRoute active node is: ' + _treeOfView.data[contextID].activeNode.name);
    console.log('onRoute route.emit');
    this.router.navigate([_treeOfView.data[contextID].routerLink()]);
    this.route.emit(contextID);
    console.log('onRoute Routed to ' + contextID);
  }

  onChartRoute(contextID: ObjectID) {
    console.log('Routing to ' + contextID);
    // this.route.emit(contextID);
  }

  get root(): NodeOfView {
    return _treeOfView.root;
  }

  getRandomChart() {
    /*const chartIndex = Math.floor(Math.random() * this._chartData.getCount());
    console.log('getRandomChart: ' + chartIndex + ' of ' + this._chartData.getCount());*/

    if (this.rndChartIndex >= this._chartData.getCount()) {
      this.rndChartIndex = 0;
    }
    return this._chartData.getChart(this.rndChartIndex++);
  }

  getDefaultChart(UID: number) {
    if (UID === this._activeChart.UID && this._activeChart && this._activeChart.valid) {
      console.log('Show chart in view with UID ' + UID);
      this._activeChart.valid = false;
      const data = this._activeChart.data.clone();
      this._activeChart = null;
      return data; // .clone();
    }
    console.log('Show random chart for UID ' + UID);
    // return this._chartData.getChart(0);
    return this.getRandomChart();
  }

  getActiveChart() {
    console.log('getActiveChart', this._activeChart.UID, this._activeChart.data, this._activeChart.valid);
    return this._activeChart;
  }

  setActiveChart(UID: number, data: ChartDataRecord) {
    this._activeChart = {'UID': UID, 'data': data, 'valid': true};
    console.log('setActiveChart', this._activeChart.UID, this._activeChart.data, this._activeChart.valid);
  }

  chartCounterUp() {
    this.chartCounter++;
    console.log(this.chartCounter);
  }

  chartCounterZero() {
    this.chartCounter = 0;
  }

  async chartClose(id) {
    if (this.chartCounter !== 0) {
      window.history.back();
      await this.sleep(10);
      this.router.navigate([/chart/ + id]);
      return this.chartCounter;
    } else {
      this.chartCounterUp();
      this.router.navigate([/chart/ + id]);
      return this.chartCounter;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
