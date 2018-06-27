import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewPrelavaggio {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Pre-lavaggio');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewPompaAcqua,
      'childId': 'child1', 'contextID': ObjectID.viewPompaAcqua});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewContatoreAcqua,
      'childId': 'child2', 'contextID': ObjectID.viewContatoreAcqua});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensoreTemperatura,
      'childId': 'child3', 'contextID': ObjectID.viewSensoreTemperatura});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSensoreLivelloAcqua,
      'childId': 'child4', 'contextID': ObjectID.viewSensoreLivelloAcqua});

    data.leanOptions.cssDefault = 'an4 bp';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an4L bpL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an4L bpD');
    return data;

  }
}
