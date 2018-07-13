import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreOreLavoro {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Tempo di lavoro (h)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsolav';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsolavD'
    );
    return data;
  }
}
