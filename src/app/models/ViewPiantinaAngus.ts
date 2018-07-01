import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewPiantinaAngus {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('Impianto');
    const objs = [];
    data.objects = objs;

    // la home va impostata a mano
    data.contextID = ObjectID.viewHome;

    objs.push({
      'routerLink': '/apptour/' + ObjectID.viewSezioneLavaggio,
      'childId': 'child1', 'contextID': ObjectID.viewSezioneLavaggio
    });
    objs.push({
      'routerLink': '/apptour/' + ObjectID.viewSezioneTrattamento,
      'childId': 'child2', 'contextID': ObjectID.viewSezioneTrattamento
    });
    objs.push({
      'routerLink': '/apptour/' + ObjectID.viewSezioneStoccaggio,
      'childId': 'child3', 'contextID': ObjectID.viewSezioneStoccaggio
    });

    // Per descrizione stili guardare in styleAngus.scss e styleAngusBackgroundd.scss

    data.leanOptions.cssDefault = 'an3 baH';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an3L baHL');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an3L baHD');
    return data;

  }
}
