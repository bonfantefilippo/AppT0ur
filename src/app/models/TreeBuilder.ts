import {ObjectID} from './object-id.enum';
import {ViewPiantina} from './ViewPiantina';

export class TreeOfView {
  public data: ObjectOfView[] = [];

  constructor() {
    this.data.push(ViewPiantina.JSON());
  }
}

export class ObjectOfView {
  private class: string;
  classes: string[];
  objects: ChildOfView[];

  constructor(public name) {
  }

  public setClasses(container: string, base: string, lean: string, digital: string) {
    console.log('setClasses');
    this.classes = [container, base, lean, digital];
  }

  public get classContainer() {
    return this.classes[0];
  }

  public get classBase() {
    return this.classes[1];
  }

  public get classLean() {
    return this.classes[2];
  }

  public get classDigital() {
    return this.classes[3];
  }

  public classByIndex(index: number) {
    return this.classes[index];
  }
}

export class ChildOfView {
  class: string;
  routerLink: string;
  childId: string;
  contextID: ObjectID;

  constructor(public name) {
  }
}
