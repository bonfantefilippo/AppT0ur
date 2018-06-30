import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewVascaPrimer {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Vasca Primer');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensorePH, 'childId': 'child1', 'contextID': ObjectID.viewSensorePH});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensoreLivello, 'childId': 'child2', 'contextID': ObjectID.viewSensoreLivello});

    data.leanOptions.cssDefault = 'an2 bvp';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an2L bvpL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an2L bvpD');
    return data;

  }
}
