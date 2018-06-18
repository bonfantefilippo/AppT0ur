import {ObjectID} from './object-id.enum';

export class OptionOfView {
  public options: OptionType[] = [];
  public leanOnCount = 0;
  public cssDefault: string;
  constructor() {
  }

  public addOption(index: number,
                   text: string,
                   checked: boolean,
                   contextID: ObjectID,
                   floating: boolean = true,
                   css: string = ''
  ) {
    if (floating) {
      this.options.push(new OptionType(index, text, checked, contextID, null, css));
    } else {
      this.options.push(new OptionType(index, text, checked, contextID, this, css));
    }
  }

  get digitalEnable(): boolean {
    return (this.leanOnCount > 0);
  }
}


export class OptionType {

  private _checked = false;

  constructor(public index: number,
              public text: string,
              checked: boolean,
              public contextID: ObjectID,
              public parent = null,
              public css = ''
  ) {
    this.checked = checked;
  }

  set checked(value: boolean) {
    if (this._checked === value) {
      return;
    }
    this._checked = value;
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.leanOnCount++;
    } else {
      this.parent.leanOnCount--;
    }
    console.log('this.parent.leanOnCount ' + this.parent.leanOnCount);
  }

  get checked(): boolean {
    return this._checked;
  }
}
