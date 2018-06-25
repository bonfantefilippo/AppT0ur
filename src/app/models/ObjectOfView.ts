import {ObjectID} from './object-id.enum';
import {OptionOfView} from './OptionBuilder';
/* todo: rendere ObjectOfView ricorsiva portando dentro i membri di ChildOfView
*  e trasformando objects in     objects: ObjectOfView[];
*  risultato:
  export class ObjectOfView {
    css: string;
    routerLink: string;
    childId: string;
    contextID: ObjectID;
    public objects: ObjectOfView[];
    public leanOptions: OptionOfView = new OptionOfView();
    public digitalOptions: OptionOfView = new OptionOfView();
    public charts: ChartOfView[];   // pacchetto per la contestualizzazione dei grafici
    constructor(public name) { }
  }
  export class ChartOfView {
    chart: number;   // punta ad un chart specifico
    active           // array di condizioni da verificare per avere il grafico attivo
    dataActive[]     // array di condizioni da verificare per avere la traccia attiva
  }

*
* */
export class ObjectOfView {
  public objects: ChildOfView[]; // obsoleto
  private _children: ObjectOfView[] = [];

  css: string;
  childId: string;
  contextID: ObjectID;


  public leanOptions: OptionOfView = new OptionOfView();
  public digitalOptions: OptionOfView = new OptionOfView();
  public chartOptions: OptionOfChart = new OptionOfChart();

  constructor(public name) {
  }

  routerLink(): string {
    return  '/apptour/' + this.contextID;
  }
  getChild(index: number) {
    return this._children[index];

  }
  getChild(name: string) {
    this._children.forEach( child => {
      if (child.name == name) {
        return child;
      }
    });
    return null;
  }
  fromJSON(JSON: any) {
    // utilizzato per integrare tutti i files ts già scritti
  }
  appendChild(child: ObjectOfView) {
    this._children.push(child);
  }
  numChildren(): number {
    return this._children.length;
  }
}

export class ChildOfView { // obsoleto
  css: string;
  routerLink: string;
  childId: string;
  contextID: ObjectID;

  constructor(public name) {
  }
}
export class OptionOfChart {
  // portare in un file specifico e implementare
}
