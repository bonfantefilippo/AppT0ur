import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewVascaFinisher {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Vasca Finisher');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensoreLivello, 'childId': 'child1', 'contextID': ObjectID.viewSensoreLivello});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensorePH, 'childId': 'child2', 'contextID': ObjectID.viewSensorePH});

    data.leanOptions.cssDefault = 'an2 bvf';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an2L bvfL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an2L bvfD');
    return data;

  }
}
