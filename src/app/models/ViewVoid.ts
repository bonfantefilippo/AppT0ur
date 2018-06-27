import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewVoid {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Piantina');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/home' , 'childId': 'child1', 'contextID': ObjectID.viewHome});

    data.leanOptions.cssDefault = '';
    return data;

  }
}
