import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewAsciugatura {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Asciugatura');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewVentilatore});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewContatoreAcqua});
    objs.push({'childId': 'child3', 'contextID': ObjectID.viewSensoreTemperatura});
    objs.push({'childId': 'child4', 'contextID': ObjectID.viewSensoreUmidita});

    data.leanOptions.cssDefault = 'an4 ba';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an4L baL');
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an4L baD');
    return data;

  }
}
