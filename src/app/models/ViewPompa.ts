import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewPompa {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Pompa');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewSensoreCorrenteAssorbita});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewSensoreNumeroDiGiri});
    objs.push({'childId': 'child3', 'contextID': ObjectID.viewSensoreOreLavoro});

    data.leanOptions.cssDefault = 'an3 bpom';
    data.digitalOptions.addOption(4, 'WIFI', false, ObjectID.btnDigitalChild1, false, 'an3L bpomD');
    return data;

  }
}
