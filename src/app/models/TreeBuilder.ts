import {ObjectID} from './object-id.enum';
import {ViewPiantina} from './ViewPiantina';
import {ViewMagazzino} from './ViewMagazzino';
import {ViewVoid} from './ViewVoid';
import {ObjectOfView} from './ObjectOfView';

export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data[ObjectID.notSet] = ViewVoid.JSON();
    this.data[ObjectID.viewHome] = ViewPiantina.JSON();
    this.data[ObjectID.viewMagazzino] = ViewMagazzino.JSON();
  }
}
