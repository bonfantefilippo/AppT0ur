import {ObjectID} from './object-id.enum';
import {OptionOfView} from './OptionBuilder';

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
