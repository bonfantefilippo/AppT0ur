import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewSensoreTemperatura {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Sensore di Temperatura (°C)');
    const objs = [];
    data.objects = objs;

    // TODO NON CI DOVREBBERO ESSERE FIGLI (SENSORI(?))

    data.leanOptions.cssDefault = 'an1 bsts';
    // data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an1 bstsL');
    // data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an1 bstsD');
    return data;
  }
}
