import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './TreeBuilder';

export class ViewVoid {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewPiantina');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/home' , 'childId': 'child1', 'contextID': ObjectID.viewHome});

    data.leanOptions.cssDefault = '';
    return data;

  }
}
