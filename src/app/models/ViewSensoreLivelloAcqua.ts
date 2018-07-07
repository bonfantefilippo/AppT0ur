import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewSensoreLivelloAcqua {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Livello Acqua (m)');
    const objs = [];
    data.objects = objs;

    // TODO NON CI DOVREBBERO ESSERE FIGLI (SENSORI(?))

    data.leanOptions.cssDefault = 'an1 bsla';
    // data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an1 bslaL');
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an1 bslaD');
    return data;
  }
}
