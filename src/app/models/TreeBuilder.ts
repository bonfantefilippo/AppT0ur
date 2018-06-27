import {ObjectID} from './object-id.enum';
import {ViewVoid} from './ViewVoid';
import {ObjectOfView} from './ObjectOfView';
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
import {ViewSensoreTemperatura} from './ViewSensoreTemperatura';
import {ViewSensoreLivelloAcqua} from './ViewSensoreLivelloAcqua';
import {ViewPompa} from './ViewPompa';
import {ViewVentilatore} from './ViewVentilatore';
import {ViewSensoreUmidita} from './ViewSensoreUmidita';
import {ViewSensorePH} from './ViewSensorePH';
import {ViewSensoreLivello} from './ViewSensoreLivello';
import {ViewMotore1} from './ViewMotore1';
import {ViewMotore2} from './ViewMotore2';
import {ViewSensoreCorrenteAssorbita} from './ViewSensoreCorrenteAssorbita';
import {ViewSensoreNumeroDiGiri} from './ViewSensoreNumeroDiGiri';
import {ViewSensoreOreLavoro} from './ViewSensoreOreLavoro';


export class TreeOfView {
  public data: ObjectOfView[] = [];
  private _tree: ObjectOfView;

  constructor() {
    this.data[ObjectID.viewPiantinaAngus] = ViewPiantinaAngus.JSON();
    this.data[ObjectID.viewSezioneLavaggio] = ViewSezioneLavaggio.JSON();
    this.data[ObjectID.viewPrelavaggio] = ViewPrelavaggio.JSON();
    this.data[ObjectID.viewLavaggio] = ViewLavaggio.JSON();
    this.data[ObjectID.viewAsciugatura] = ViewAsciugatura.JSON();

    // inizio Filippo SISTEMARE CSS
    this.data[ObjectID.viewPompaAcqua] = ViewPompaAcqua.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewContatoreAcqua] = ViewContatoreAcqua.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreTemperatura] = ViewSensoreTemperatura.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreLivelloAcqua] = ViewSensoreLivelloAcqua.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewPompa] = ViewPompa.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewVentilatore] = ViewVentilatore.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreUmidita] = ViewSensoreUmidita.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    // Fine Filippo

    this.data[ObjectID.viewSezioneTrattamento] = ViewSezioneTrattamento.JSON();
    this.data[ObjectID.viewVascaPretrattamento] = ViewVascaPreTrattamento.JSON();
    this.data[ObjectID.viewVascaPrimer] = ViewVascaPrimer.JSON();
    this.data[ObjectID.viewVascaFinisher] = ViewVascaFinisher.JSON();

    // inizio Filippo
    // A vista sono invertiti i due sensori qui sotto
    this.data[ObjectID.viewSensorePH] = ViewSensorePH.JSON();  // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreLivello] = ViewSensoreLivello.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    // Fine Filippo

    this.data[ObjectID.viewSezioneStoccaggio] = ViewSezioneStoccaggio.JSON();
    this.data[ObjectID.viewImpilatore] = ViewImpilatore.JSON();

    // Inizio Filippo
    this.data[ObjectID.viewMotore1] = ViewMotore1.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewMotore2] = ViewMotore2.JSON(); //  Css MANCANO IMMAGINI--> ORA COLORI

    this.data[ObjectID.viewSensoreCorrenteAssorbita] = ViewSensoreCorrenteAssorbita.JSON(); //  Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreNumeroDiGiri] = ViewSensoreNumeroDiGiri.JSON(); //  Css MANCANO IMMAGINI--> ORA COLORI
    this.data[ObjectID.viewSensoreOreLavoro] = ViewSensoreOreLavoro.JSON(); // Css MANCANO IMMAGINI--> ORA COLORI
    // Fine Filippo

    // definiamo la radice dell'albero, il resto si fa da se e il risultatao
    // è la struttura ad albero completa
    this._tree = this.data[ObjectID.viewPiantinaAngus];
    this._tree.fromJSON(index => {
      return this.data[index];
    });
  }

  get root() {
    return this._tree.node;
  }
}
