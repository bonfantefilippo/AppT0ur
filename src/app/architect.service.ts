import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './models/object-id.enum';
import {ChartData, ChartDataRecord} from './models/ChartData';
import {ICallback} from './models/ICallback';
import {TreeOfView} from './models/TreeBuilder';
import {Router} from '@angular/router';


const _treeOfView = new TreeOfView();

@Injectable()
export class ArchitectService {
  /*private rndChartIndex = 0;*/
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
  @Output() leanClick = new EventEmitter();
  @Output() digitalClick = new EventEmitter();
  @Output() leanChange = new EventEmitter();
  @Output() digitalChange = new EventEmitter();
  /*
  * quando il focus passa su un componente diverso cambia anche il set delle
  * ottimizzazioni possibili
  * */
  @Output() leanSetChange = new EventEmitter();
  @Output() digitalSetChange = new EventEmitter();
  @Output() dataChange = new EventEmitter();
  @Output() objectMouseOver = new EventEmitter();
  @Output() route = new EventEmitter();


  /*
    quando si fa il click su uno dei grafici di sinistra memorizziamo le informazioni relative
    in modo che quando viene eseguito il routing il componente caricato nella view
    possa accedere alle informazioni relative
    Quando nella view viene caricato qualcosaltro la _activeChart deve essere annullata
   */
  private _activeChart: { UID: number; data: ChartDataRecord; valid: boolean } = {UID: 0, data: null, valid: false};


  constructor(public router: Router) {
  }

  registerOptimizer(contextID: ObjectID) {
    if (!_treeOfView.data[this.index]) {
      console.log('register FAIL btn of context: ' + contextID + ' set change', _treeOfView.data[this.index]);
      return -1;
    }
    console.log('registering btn of context: ' + contextID + ' set change', _treeOfView.data[this.index]);
    switch (contextID) {
      case ObjectID.btnDigital:
        this.digitalSetChange.emit(_treeOfView.data[this.index].digitalOptions);
        break;
      case ObjectID.btnLean:
        this.leanSetChange.emit(_treeOfView.data[this.index].leanOptions);
        break;
    }

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
    if (!_treeOfView.data[contextID]) {
      console.log('register object FAIL', contextID, caller);
      return -1;
    }
    console.log('registering object of context: ' + contextID + ' set change', _treeOfView.data[contextID]);
    this.leanSetChange.emit(_treeOfView.data[contextID].leanOptions);
    this.digitalSetChange.emit(_treeOfView.data[contextID].digitalOptions);

    if (!caller) {
      return -1;
    }
    this.index = contextID;
    const UID = ++this._UID;

    console.log('registering object of context: ' + contextID + ' set data', _treeOfView.data[contextID]);
    caller.setData(_treeOfView.data[contextID]);

    console.log('registering object of context: ' + contextID + ' return', _treeOfView.data[contextID]);
    this.dataChange.emit(_treeOfView.data[contextID]);
    return UID;
  }

  onLean(event) {
    this.leanClick.emit(event);
  }

  onDigital(event) {
    this.digitalClick.emit(event);

  }

  onLeanOption(btn) {
    console.log('onLeanOption ' + btn.index);
    this.leanChange.emit(_treeOfView.data[this.index].leanOptions);
  }

  onDigitalOption(btn) {
    console.log('onDigitalOption ' + btn.index);
    this.digitalChange.emit(_treeOfView.data[this.index].digitalOptions);
  }

  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }

  onRoute(contextID: ObjectID) {
    console.log('Routing to ' + contextID);
    this.route.emit(contextID);
    this.dataChange.emit(_treeOfView.data[contextID]);
  }

  getChart(contextID: ObjectID) {
    return this._chartData.getChart(contextID - ObjectID.chart1);
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
