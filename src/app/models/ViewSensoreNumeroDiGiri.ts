import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreNumeroDiGiri {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Numero di giri (RPM)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsng';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsngD'
    );
    return data;
  }
}
