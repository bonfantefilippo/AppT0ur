import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewPompaAcqua {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Pompa Acqua');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewSensoreCorrenteAssorbita});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewSensoreNumeroDiGiri});
    objs.push({'childId': 'child3', 'contextID': ObjectID.viewSensoreOreLavoro});

    data.leanOptions.cssDefault = 'an3 bpa';
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3L bpaD');
    return data;

  }
}
