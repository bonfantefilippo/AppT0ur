import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './TreeBuilder';

export class ViewPiantina {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewPiantina');
    const objs = [];

    data.setClasses('container', 'sfondoBasePiantina', 'lean', 'digital');
    data.objects = objs;

    objs.push({'routerLink': '/magazzino', 'childId': 'child1', 'contextID': ObjectID.piantinaChild1});
    objs.push({'routerLink': '/preparazione', 'childId': 'child2', 'contextID': ObjectID.piantinaChild2});
    objs.push({'routerLink': '/lavorazione', 'childId': 'child3', 'contextID': ObjectID.piantinaChild3});
    objs.push({'routerLink': '/finitura', 'childId': 'child4', 'contextID': ObjectID.piantinaChild4});
    objs.push({'routerLink': '/magazzinofinale', 'childId': 'child5', 'contextID': ObjectID.piantinaChild5});
    return data;

  }
}
