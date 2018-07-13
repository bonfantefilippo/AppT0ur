import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewImpilatore {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Impilatore');
    const objs = [];
    data.objects = objs;

    objs.push({'childId': 'child1', 'contextID': ObjectID.viewMotore1});
    objs.push({'childId': 'child2', 'contextID': ObjectID.viewMotore2});

    data.leanOptions.cssDefault = 'an2 bi';
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an2L biD');
    return data;

  }
}
