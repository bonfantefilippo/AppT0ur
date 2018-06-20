import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './models/object-id.enum';
import {ChartData, ChartDataRecord} from './models/ChartData';
import {ICallback} from './models/ICallback';
import {TreeOfView} from './models/TreeBuilder';
import {OptionOfView, OptionType} from './models/OptionBuilder';


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
    console.log('registering object of context: ' + contextID);
    if (!(caller && _treeOfView.data[contextID])) {
      return -1;
    }

    const UID = ++this._UID;
    this.registeredObjects.push({
      'caller': caller,
      'contextID': contextID,
      'UID': UID
    });
    caller.setData(_treeOfView.data[contextID]);


    this.leanSetChange.emit(_treeOfView.data[contextID].leanOptions);
    this.digitalSetChange.emit(_treeOfView.data[contextID].digitalOptions);


    /*if (caller) {
      caller.setData(_treeOfView.data[ObjectID.viewHome]);
    }
    this.leanSetChange.emit(_treeOfView.data[ObjectID.viewHome].leanOptions);
    this.digitalSetChange.emit(_treeOfView.data[ObjectID.viewHome].digitalOptions);*/
    return UID;
  }

  onLean(event) {
    this.leanClick.emit(event);
  }

  onDigital(event) {
    this.digitalClick.emit(event);

  }

  onLeanOption(btn) {
    /* btn.index punta all'array degli oggetti
    * todo: implementare l'arry*/
    console.log('onLeanOption ' + btn.index);
    // console.log('onLeanOption(' + btn.index + ').checked = ' + this.leanOption[btn.index].checked);
    // this.leanOption[btn.index].checked = btn.checked;
    this.leanChange.emit(_treeOfView.data[this.index].leanOptions);
  }

  onDigitalOption(btn) {
    // this.digitalOption[btn.index ].checked = btn.checked;
    this.digitalChange.emit(_treeOfView.data[this.index].digitalOptions);
  }

  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }

  onRoute(contextID: ObjectID) {
    console.log('Routing to ' + contextID);
    this.route.emit(contextID);
  }

  onChartRoute(contextID: ObjectID) {
    console.log('Routing to ' + contextID);
    // this.route.emit(contextID);
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
}
