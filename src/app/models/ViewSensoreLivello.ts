import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewSensoreLivello {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Livello (m)');
    const objs = [];
    data.objects = objs;

    // TODO NON CI DOVREBBERO ESSERE FIGLI

    // TODO --> SISTEMARE CSS
    data.leanOptions.cssDefault = 'an1 bsenliv';
    /*data.leanOptions.addOption(
      3,
      'layout',
      false,
      ObjectID.btnLeanChild1,
      false,
      'an1 bsenlivL'
    );*/
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
