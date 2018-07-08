import {ViewSensoreOreLavoro} from './ViewSensoreOreLavoro';
import {ViewSensoreNumeroDiGiri} from './ViewSensoreNumeroDiGiri';
import {ViewSensoreTemperatura} from './ViewSensoreTemperatura';
import {ViewMotore2} from './ViewMotore2';
import {ViewMotore1} from './ViewMotore1';
import {ViewSensorePH} from './ViewSensorePH';
import {ViewSensoreUmidita} from './ViewSensoreUmidita';
import {ViewVentilatore} from './ViewVentilatore';
import {ViewSensoreLivelloAcqua} from './ViewSensoreLivelloAcqua';
import {ObjectID} from './object-id.enum';
import {NodeOfView, ObjectOfView} from './ObjectOfView';
import {ViewPiantinaAngus} from './ViewPiantinaAngus';
import {ViewSezioneLavaggio} from './ViewSezioneLavaggio';
import {ViewPrelavaggio} from './ViewPrelavaggio';
import {ViewLavaggio} from './ViewLavaggio';
import {ViewAsciugatura} from './ViewAsciugatura';
import {ViewSezioneTrattamento} from './ViewSezioneTrattamento';
import {ViewVascaPrimer} from './ViewVascaPrimer';
import {ViewVascaFinisher} from './ViewVascaFinisher';
import {ViewSezioneStoccaggio} from './ViewSezioneStoccaggio';
import {ViewImpilatore} from './ViewImpilatore';
import {ViewVascaPreTrattamento} from './ViewVascaPreTrattamento';
import {ViewPompaAcqua} from './ViewPompaAcqua';
import {ViewContatoreAcqua} from './ViewContatoreAcqua';
import {ViewPompa} from './ViewPompa';
import {ViewSensoreLivello} from './ViewSensoreLivello';
import {ViewSensoreCorrenteAssorbita} from './ViewSensoreCorrenteAssorbita';


export class TreeOfView {
  public data: ObjectOfView[] = [];
  private _tree: ObjectOfView;

  constructor() {
    this.data[ObjectID.viewPiantinaAngus] = ViewPiantinaAngus.JSON();
    this.data[ObjectID.viewSezioneLavaggio] = ViewSezioneLavaggio.JSON();
    this.data[ObjectID.viewPrelavaggio] = ViewPrelavaggio.JSON();
    this.data[ObjectID.viewLavaggio] = ViewLavaggio.JSON();
    this.data[ObjectID.viewAsciugatura] = ViewAsciugatura.JSON();

    // inizio Filippo
    this.data[ObjectID.viewPompaAcqua] = ViewPompaAcqua.JSON();
    this.data[ObjectID.viewContatoreAcqua] = ViewContatoreAcqua.JSON();
    this.data[ObjectID.viewSensoreTemperatura] = ViewSensoreTemperatura.JSON();
    this.data[ObjectID.viewSensoreLivelloAcqua] = ViewSensoreLivelloAcqua.JSON();
    this.data[ObjectID.viewPompa] = ViewPompa.JSON();
    this.data[ObjectID.viewVentilatore] = ViewVentilatore.JSON();
    this.data[ObjectID.viewSensoreUmidita] = ViewSensoreUmidita.JSON();


    this.data[ObjectID.viewSezioneTrattamento] = ViewSezioneTrattamento.JSON();
    // Andrea @ Filippo: ho sistemato l'ordine dei sensosi
    this.data[ObjectID.viewVascaPretrattamento] = ViewVascaPreTrattamento.JSON();
    this.data[ObjectID.viewVascaPrimer] = ViewVascaPrimer.JSON();
    this.data[ObjectID.viewVascaFinisher] = ViewVascaFinisher.JSON();


    this.data[ObjectID.viewSensorePH] = ViewSensorePH.JSON();
    this.data[ObjectID.viewSensoreLivello] = ViewSensoreLivello.JSON();


    this.data[ObjectID.viewSezioneStoccaggio] = ViewSezioneStoccaggio.JSON();
    this.data[ObjectID.viewImpilatore] = ViewImpilatore.JSON();


    this.data[ObjectID.viewMotore1] = ViewMotore1.JSON();
    this.data[ObjectID.viewMotore2] = ViewMotore2.JSON();

    this.data[ObjectID.viewSensoreCorrenteAssorbita] = ViewSensoreCorrenteAssorbita.JSON();
    this.data[ObjectID.viewSensoreNumeroDiGiri] = ViewSensoreNumeroDiGiri.JSON();
    this.data[ObjectID.viewSensoreOreLavoro] = ViewSensoreOreLavoro.JSON();
    // Fine Filippo


    // definiamo la radice dell'albero, il resto si fa da se e il risultatao
    // è la struttura ad albero completa
   /* this._tree = this.data[ObjectID.viewPiantinaAngus];
    this._tree.fromJSON(index => {
      return this.data[index];
    });*/
    this._tree = this.data[ObjectID.viewPiantinaAngus].fromJSON(index => {
      return this.data[index];
    });
  }

  get root(): NodeOfView {
    return this._tree; // .node;
  }
  get activeNode(): ObjectOfView {
    return this._tree.activeNode as ObjectOfView; // .node;
  }
}
