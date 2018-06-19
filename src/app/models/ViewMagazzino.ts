import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewMagazzino {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewMagazzino');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.magazzinoChild1, 'childId': 'child1', 'contextID': ObjectID.piantinaChild1});
    objs.push({'routerLink': '/apptour/' + ObjectID.magazzinoChild2, 'childId': 'child2', 'contextID': ObjectID.piantinaChild2});
    objs.push({'routerLink': '/apptour/' + ObjectID.magazzinoChild3, 'childId': 'child3', 'contextID': ObjectID.piantinaChild3});

    data.leanOptions.cssDefault = 'container3v1';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'container3v2');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1);
    data.digitalOptions.addOption(5, 'Current', true, ObjectID.btnDigitalChild2);
    return data;

  }
}
