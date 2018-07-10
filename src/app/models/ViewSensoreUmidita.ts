import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreUmidita {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Sensore di Umidità (RH)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsu';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsuD'
    );
    return data;
  }
}
