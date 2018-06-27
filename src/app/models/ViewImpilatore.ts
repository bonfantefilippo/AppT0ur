import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewImpilatore {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Impilatore');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewMotore1, 'childId': 'child1', 'contextID': ObjectID.viewMotore1});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewMotore2, 'childId': 'child2', 'contextID': ObjectID.viewMotore2});

    data.leanOptions.cssDefault = 'an2 bi';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an2L biL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an2L biD');
    return data;

  }
}
