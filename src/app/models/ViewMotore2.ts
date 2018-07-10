import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewMotore2 {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Motore 2');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewSensoreCorrenteAssorbita});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewSensoreNumeroDiGiri});
    objs.push({'childId': 'child3', 'contextID': ObjectID.viewSensoreOreLavoro});

    data.leanOptions.cssDefault = 'an3 bmot2';
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3L bmot2D');
    return data;

  }
}
