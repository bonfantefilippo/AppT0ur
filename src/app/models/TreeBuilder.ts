import {ObjectID} from './object-id.enum';
import {ViewPiantina} from './ViewPiantina';
import {OptionOfView} from './OptionBuilder';
import {ViewMagazzino} from './ViewMagazzino';
import {ViewVoid} from './ViewVoid';

export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data[ObjectID.notSet] = ViewVoid.JSON();
    this.data[ObjectID.viewHome] = ViewPiantina.JSON();
    this.data[ObjectID.viewMagazzino] = ViewMagazzino.JSON();
  }
}

export class ObjectOfView {
  public objects: ChildOfView[];
  public leanOptions: OptionOfView = new OptionOfView();
  public digitalOptions: OptionOfView = new OptionOfView();

  constructor(public name) {
  }
}

export class ChildOfView {
  css: string;
  routerLink: string;
  childId: string;
  contextID: ObjectID;

  constructor(public name) {
  }
}
