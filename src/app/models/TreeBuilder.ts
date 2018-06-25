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


export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data[ObjectID.viewPiantinaAngus] = ViewPiantinaAngus.JSON();
    this.data[ObjectID.viewSezioneLavaggio] = ViewSezioneLavaggio.JSON();
    this.data[ObjectID.viewPrelavaggio] = ViewPrelavaggio.JSON();
    this.data[ObjectID.viewLavaggio] = ViewLavaggio.JSON();
    this.data[ObjectID.viewAsciugatura] = ViewAsciugatura.JSON();
    // this.data[ObjectID.viewPompaAcqua] = ViewPompaAcqua.JSON();
    // this.data[ObjectID.viewContatoreAcqua] = ViewContatoreAcqua.JSON();
    // this.data[ObjectID.viewSensoreTemperatura] = ViewSensoreTemperatura.JSON();
    // this.data[ObjectID.viewSensoreLivelloAcqua] = ViewSensoreLivelloAcqua.JSON();
    // this.data[ObjectID.viewPompa] = ViewPompa.JSON();
    // this.data[ObjectID.viewVentilatore] = ViewVentilatore.JSON();
    // this.data[ObjectID.viewSensoreUmidita] = ViewSensoreUmidita.JSON();
    this.data[ObjectID.viewSezioneTrattamento] = ViewSezioneTrattamento.JSON();
    // this.data[ObjectID.viewVascaPretrattamento] = ViewVascaPretrattamento.JSON();
    this.data[ObjectID.viewVascaPrimer] = ViewVascaPrimer.JSON();
    this.data[ObjectID.viewVascaFinisher] = ViewVascaFinisher.JSON();
    // this.data[ObjectID.viewSensoreLivello] = ViewSensoreLivello.JSON();
    // this.data[ObjectID.viewSensorePH] = ViewSensorePH.JSON();
    this.data[ObjectID.viewSezioneStoccaggio] = ViewSezioneStoccaggio.JSON();
    this.data[ObjectID.viewImpilatore] = ViewImpilatore.JSON();
    // this.data[ObjectID.viewMotore1] = ViewMotore1.JSON();
    // this.data[ObjectID.viewMotore2] = ViewMotore2.JSON();


  }
}
