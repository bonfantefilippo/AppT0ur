import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreTemperatura {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Sensore di Temperatura (°C)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsts';
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an1 bstsD');
    return data;
  }
}
