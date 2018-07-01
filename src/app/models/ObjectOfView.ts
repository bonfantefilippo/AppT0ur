import {ObjectID} from './object-id.enum';
import {OptionOfView, OptionType} from './OptionBuilder';
import {ChartData} from './ChartData';

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
  public parent: ObjectOfView = null;
  private _activeNode: ObjectOfView = null;

  css: string;
  childId: string;
  contextID: ObjectID;

  public leanOptions: OptionOfView = new OptionOfView();
  public digitalOptions: OptionOfView = new OptionOfView();
  public chartOptions: OptionOfChart = new OptionOfChart();

  constructor(public name) {
  }

  routerLink(): string {
    return '/apptour/' + this.contextID;
  }

  getChildByIndex(index: number) {
    return this._children[index];

  }

  getChildByName(name: string) {
    this._children.forEach(child => {
      if (child.name == name) {
        return child;
      }
    });
    return null;
  }

  fromJSON(callbackFn: (index: number) => ObjectOfView): ObjectOfView {
    // utilizzato per integrare tutti i files ts già scritti
    // trasforma la struttura lineare in struttura ad albero
    this.objects.forEach(child => {
      let node: ObjectOfView = callbackFn(child.contextID);
      if (node) {
        node.parent = this;
        node.css = child.css;
        node.contextID = child.contextID;
        this._children.push(node.fromJSON(i => callbackFn(i)));
      } else {
        /*if (child.name) {*/
          node = new ObjectOfView(child.name);
        /*} else {
          node = new ObjectOfView('nodo ' + child.contextID);
        }*/
        node.parent = this;
        node.css = child.css;
        node.contextID = child.contextID;
        this._children.push(node);
      }
    });
    // console.log('BuildTree', this.contextID);
    return this;
  }
  get root(): ObjectOfView {
    if (this.parent) {
      return this.parent.root;
    }
    return this;
  }
  setActive() {
    this.activeNode = this;
  }
  set activeNode(node: ObjectOfView) {
    if (this.parent) {
      this.parent.activeNode = node;
     }
    this._activeNode = node;
  }
  get activeNode(): ObjectOfView {
    if (this.parent) {
      return this.parent.activeNode;
    }
    return this._activeNode;
  }
  get isActive(): boolean {
    return (this === this.activeNode);
  }
  get node(): NodeOfView {
    return {
      id: this.contextID,
      name: this.name,
      children: this.children,
      isSelected: this.isActive,
      data: this
    };
  }

  get children(): NodeOfView[] {
    const nodes: NodeOfView[] = [];
    this._children.forEach(child => {
      nodes.push(child.node);
    });
    return nodes;
  }

  appendChild(child: ObjectOfView) {
    this._children.push(child);
  }

  numChildren(): number {
    return this._children.length;
  }
}

export class NodeOfView {
  id: ObjectID;
  name: string;
  children: NodeOfView[];
  isSelected: boolean;
  data: ObjectOfView;
}

export class ChildOfView { // obsoleto
  css: string;
  routerLink: string;
  childId: string;
  contextID: ObjectID;

  constructor(public name) {
  }
}


// portare in un file specifico e implementare
export class OptionOfChart {
  /*
    serve per contestualizzare i charts, già memorizzati già nell'architect:
    vedi  private _chartData = new ChartData();
   */
  public options: ChartOptionType[] = [];

  constructor() {
  }

  public addOption(indexOfChart: number,
                   text: string,
                   useWithLeanOptions: boolean[], /* -1 significa con tutte */
                   useWithDigitalOptions: boolean[]  /* -1 significa con tutte */
  ) {
    this.options.push(new ChartOptionType(indexOfChart, text, useWithLeanOptions, useWithDigitalOptions));
  }
}

export class ChartOptionType {
  constructor(public indexOfChart: number,
              public text: string,
              public useWithLeanOptions: boolean[], /* -1 significa con tutte */
              public useWithDigitalOptions: boolean[]  /* -1 significa con tutte */) {
  }
}
