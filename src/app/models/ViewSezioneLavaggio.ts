import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewSezioneLavaggio {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Sezione Lavaggio');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewPrelavaggio});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewLavaggio});
    objs.push({'childId': 'child3', 'contextID': ObjectID.viewAsciugatura});

    data.leanOptions.cssDefault = 'an3 bsl';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an3L bslL');
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3D bslD');
    return data;
  }
}
