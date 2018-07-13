import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreLivello {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Livello (m)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsenliv';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsenlivD'
    );
    return data;
  }
}
