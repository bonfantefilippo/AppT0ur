import {ObjectID} from './object-id.enum';
import {ViewPiantina} from './ViewPiantina';
import {OptionOfView} from './OptionBuilder';

export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data[ObjectID.viewHome] = ViewPiantina.JSON();
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
