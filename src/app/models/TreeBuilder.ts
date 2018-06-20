import {ObjectID} from './object-id.enum';
import {ViewPiantina} from './ViewPiantina';
import {ViewMagazzino} from './ViewMagazzino';
import {ViewVoid} from './ViewVoid';
import {ObjectOfView} from './ObjectOfView';
import {ViewPiantinaAngus} from './ViewPiantinaAngus';
import {ViewSezioneLavaggio} from './ViewSezioneLavaggio';
import {ViewPrelavaggio} from './ViewPrelavaggio';
import {ViewLavaggio} from './ViewLavaggio';
import {ViewAsciugatura} from './ViewAsciugatura';
import {ViewSezionePretrattamento} from './ViewSezionePretrattamento';
import {ViewVascaPreTrattamento} from './ViewVascaPreTrattamento';
import {ViewVascaPrimer} from './ViewVascaPrimer';
import {ViewVascaFinisher} from './ViewVascaFinisher';
import {ViewSezioneStoccaggio} from './ViewSezioneStoccaggio';
import {ViewImpilatore} from './ViewImpilatore';


export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data[ObjectID.notSet] = ViewVoid.JSON();
    /*this.data[ObjectID.viewHome] = ViewPiantina.JSON();*/
    this.data[ObjectID.viewHome] = ViewPiantinaAngus.JSON();
    this.data[ObjectID.viewMagazzino] = ViewMagazzino.JSON();
  }
}
