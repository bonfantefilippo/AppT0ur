import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './models/object-id.enum';
import {ChartData, ChartDataRecord} from './models/ChartData';
import {TreeOfView} from './models/TreeBuilder';
import {Router} from '@angular/router';
import {NodeOfView, ObjectOfView} from './models/ObjectOfView';

/*

  per intercettare gli eventi di routing
  https://stackoverflow.com/questions/33571605/angular-2-how-to-navigate-to-another-route-using-this-router-parent-navigate

  https://toddmotto.com/dynamic-page-titles-angular-2-router-events

  leggere i parametri
  https://stackoverflow.com/questions/40275862/how-to-get-parameter-on-angular2-route-in-angular-way

  compatibilità rxjs
  https://github.com/shlomiassaf/ngx-modialog/issues/426

 */

/**
 * @type {TreeOfView}
 * @private
 *
 * @description
 * La struttura dati che contiene tutte le informazioni sull'impianto, esportabile
 * in un file JSON e quindi importabile allo stesso modo: definire una funzione di
 * serializzazione
 * contiene sia l'array dey records, o nodi, dell'impianto sia la struttura ad albero
 * che lo rappresenta.
 *
 * L'intera struttura viene utilizzata per la visualizzazione treeView in modo che
 * i campi esposti da ogni record vengano utilizzati per stilizzare i nodi della
 * treeView mostrando il nodo attivo e le opzioni attivate per ogni nodo
 *
 * Il nodo corrente viene distribuito alla view centrale e ai bottoni per rendere
 * attivabili solo i bottoni disponibili e per sincronizzare i background della view
 * con gli stati dei bottoni.
 *
 * Ogni nodo ha un set di grafici utilizzabili e in base alle opzioni attivate
 * viene aggiornato il set dei grafici visibili
 */
const _treeOfView = new TreeOfView();

/**
 * @type {ChartData}
 * @private
 *
 * @description
 * Nell'oggetto ChartData sono definiti tutti i grafici disponibili.
 * Quando viene creato il componente graficoX, il service gli passa i dati contenuti
 * nello specifico record di _chartData
 */
const _chartData = new ChartData();

@Injectable()
export class ArchitectService {


  private rndChartIndex = 0;
  chartCounter = 0;
  _activeChart: ChartDataRecord = null;
  /*
     quando contextID = -1 l'oggetto viene creato da un routing

     Il click su un grafico a sinistra salva la this._activeChart e spara un routing

     Il grafico mostrato nella view chiede al service i suoi dati
     il service vede contextID = -1 e gli da quelli nella this._activeChart,
     quindi annulla la this._activeChart per evitare di sparare altri dati ad oggetti
     che non sono titolati a riceverli
    */


  @Output() viewChange = new EventEmitter();
  @Output() chartsChange = new EventEmitter();
  @Output() route = new EventEmitter();
  @Output() viewUnsubscribe = new EventEmitter();
  @Output() chartUnsubscribe = new EventEmitter();
  @Output() objectMouseOver = new EventEmitter();

  constructor(public router: Router) {
    /**
     * imposta la prima visualizzazione
     */
    _treeOfView.data[ObjectID.viewPiantinaAngus].setActive();
  }

  get curView(): ObjectOfView {
    return _treeOfView.activeNode;
  }

  get root(): NodeOfView {
    return _treeOfView.root;
  }

  get visibleCharts(): ChartDataRecord[] {
    return _chartData.visibleCharts;
  }


  activateView(contextID: number): ObjectOfView {
    if (!_treeOfView.data[contextID]) {
      console.log('ContextID not found', contextID);
      return null;
    }
    _treeOfView.data[contextID].setActive();

    console.log('View activated', _treeOfView.activeNode);
    this.viewChange.emit(_treeOfView.activeNode);
    this.chartsChange.emit();
    return _treeOfView.activeNode;
  }

  /**
   * onbtnLean, onbtnDigital, onLeanOption, onDigitalOption
   *
   * quando l'utente attiva/disattiva un'opzione, anche spegnendo/accendendo
   * il selettore a monte (btnLean e btnDigital) i grafici devono riflettere
   * il cambiamento introdotto e mostrarre 1, 2 o 3 tracce a seconda che sia
   * attiva la modalità standard, lean o digital.
   *
   * Aggiorniamo lo stato delle opzioni, poi aggiorniamo il filtro e infine
   * distribuiamo l'informazione:
   * per filtrare i grafici passiamo a chartData il vettore chartsVisible
   * che l'oggetto ObjectOfView corrente modifica a seguito dell'aggiornamento
   * delle opzioni;
   * per distribuire l'inbformazione scateniamo l'evento chartsChange
   *
   * TODO: le serie dei dati devono essere aggiornate quando le opzioni lean
   * e digital vengono modificate, si può per esempio contare le opzioni
   * attivate, poniamo che al massimo ce ne siano 20 disponibili e che solo
   * 11 siano attivate, allora prenderemo la 11-esima riga di una tabella
   * che contiene tutte le possibili forme della seconda serie
   * NB: la prima serie e la serie standard, ce n'è solo una
   * allo stesso modo si fa per le opzioni digital, da queste dipendono i dati
   * della terza serie.
   * In questo modo abbiamo:
   * - un grafico con una serie zenza opzioni attivate
   * - un grafico con 2 serie se c'è almeno una opzione lean attivata
   *    se le opzioni lea attivate sono 2 allora la seconda serie avrà dei dati
   *    leggermente migliori e saranno tanto migliori quanto più è alto il numero
   *    delle opzioni lean attivate
   * - un grafico a 3 serie se ci sono anche le opzioni digital
   * i dati delle serie vanno conservati in una variabile globale perchè non
   * dipendono dal nodo attivo ma dal numero delle opzioni attivate
   *
   * In conclusione: per una singola grandezza c'è la possibilità di avere 3 grafici
   * con 1 con 2 e con 3 serie visibili
   *
   * Possiamo quindi creare grafici per altre grandezze e mostrare quelli compatibili
   * con il nodo corrente
   *
   * L'oggetto ObjectOfView contiene un campo chartsVisible, array di boolean che viene
   * usato per impostare i grafici visibili in base alle opzioni attive
   *
   * L'oggetto ChartData ha una proprietà
   *    set chartsVisible(value: boolean[])
   * che permette di impostare i grafici visibili
   *
   * il codice per passare la ObjectOfView.chartsVisible a ChartData.chartsVisible
   * c'è già
   *
   * quello che manca è questo:
   * una grandezza o due in più di cui dare i grafici, abbiamo la corrente servirebbe
   * il consumo di acqua, il numero di scarti...
   * questi sono grafici che vanno creati in ChartData, cme quelli già esistenti
   *
   * Leggere in ChartData i commenti: bisogna sccrivere altri metodi come alla riga 387
   * e seguenti  e poi completare il costruttore, creando altri grafici e aggiungendoli
   * alla variabile data
   *
   * Il numero degli elementi di ObjectOfView.chartsVisible e ChartData.chartsVisible
   * deve essere uguale al numero di elementi di ChartData.data
   *
   * i due indici leanIndex e digitalIndex in CharData vanno aggiornati prima di scatenare
   *    this.chartsChange.emit()
   * leanIndex e digitalIndex accumulano i valori corrispondenti al numero delle opzioni
   * lean e digital attivate e quindi bisogna scrivere un metodo che faccia il traversing
   * dell'albero e conti le opzioni attivate o un metodo che sommi o sottragga il numero
   * giusto ogni volta che un'opzione viene attivata/disattivata
   *
   */
  onbtnLean(value: boolean) {
    this.curView.btnLean = value;
    _chartData.chartsVisible = _treeOfView.activeNode.chartsVisible;
    this.chartsChange.emit();
  }

  onbtnDigital(value: boolean) {
    this.curView.btnDigital = value;
    _chartData.chartsVisible = _treeOfView.activeNode.chartsVisible;
    this.chartsChange.emit();
  }

  onLeanOption(btn) {
    console.log('service onBtnClick');
    _treeOfView.activeNode.setBtnLeanOption(btn.contextID);
    _chartData.chartsVisible = _treeOfView.activeNode.chartsVisible;
    this.chartsChange.emit();
  }

  onDigitalOption(btn) {
    _treeOfView.activeNode.setBtnDigitalOption(btn.contextID);
    _chartData.chartsVisible = _treeOfView.activeNode.chartsVisible;
    this.chartsChange.emit();
  }

  onRoute(contextID: ObjectID) {
    /**
     * imposta il nodo corrente,
     * aggiorna le opzioni,
     * mostra nella view
     */
    console.log('onRoute Routing to ' + contextID);

    this.chartUnsubscribe.emit();
    _treeOfView.data[contextID].setActive();
    _treeOfView.activeNode.updateOptions();

    _chartData.chartsVisible = _treeOfView.activeNode.chartsVisible;

    console.log('onRoute active node is:', _treeOfView.data[contextID].activeNode);
    this.router.navigate([_treeOfView.activeNode.routerLink()]);
    this.route.emit(_treeOfView.activeNode);
    console.log('onRoute Routed to ' + contextID);
  }

  onChartRoute(data: ChartDataRecord) {
    console.log('Routing to chart', data.chartID);
    this.viewUnsubscribe.emit();
    this.setActiveChart(data);
    this.chartClose(data.chartID);
    // this.route.emit(contextID);
  }
  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }



  getActiveChart() {
    console.log('getActiveChart', this._activeChart);
    return this._activeChart;
  }

  setActiveChart(data: ChartDataRecord) {
    this._activeChart = data;
    console.log('setActiveChart', data, this._activeChart);
  }

  chartCounterUp() {
    this.chartCounter++;
    console.log('chartCounterUp', this.chartCounter);
  }

  chartCounterZero() {
    this.chartCounter = 0;
  }

  async chartClose(id) {
    console.log('chartClose counter:', this.chartCounter);
    if (this.chartCounter > 0) {
      /*window.history.back();
      await this.sleep(50);*/
      console.log('chartClose sleep > navigate ', '/chart/' + id);
      this.router.navigate(['/chart/' + id]);
      return this.chartCounter;
    } else {
      this.chartCounterUp();
      console.log('chartClose navigate ', '/chart/' + id);
      this.router.navigate(['/chart/' + id]);
      return this.chartCounter;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
