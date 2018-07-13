import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewVascaFinisher {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Vasca Finisher');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewSensorePH});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewSensoreLivello});

    data.leanOptions.cssDefault = 'an2 bvf';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an2L bvfL');
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an2L bvfD');
    return data;

  }
}
