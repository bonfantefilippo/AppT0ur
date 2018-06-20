import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewPiantinaAngus {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewPiantinaAngus');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewSezioneLavaggio, 'childId': 'child1', 'contextID': ObjectID.viewSezioneLavaggio});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSezionePretrattamento, 'childId': 'child2', 'contextID': ObjectID.viewSezionePretrattamento});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewSezioneStoccaggio, 'childId': 'child3', 'contextID': ObjectID.viewSezioneStoccaggio});

    // Per descrizione stili guardare in styleAngus.scss e styleAngusBackgroundd.scss

    data.leanOptions.cssDefault = 'an3 baH';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an3L baHL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3L baHD');
    return data;

  }
}
