import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewSezioneTrattamento {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Sezione Trattamento');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewVascaPretrattamento, 'childId': 'child1', 'contextID': ObjectID.viewVascaPretrattamento});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewVascaPrimer, 'childId': 'child2', 'contextID': ObjectID.viewVascaPrimer});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewVascaFinisher, 'childId': 'child3', 'contextID': ObjectID.viewVascaFinisher});

    data.leanOptions.cssDefault = 'an3 bsp';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an3L bspL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3L bspD');
    return data;

  }
}
