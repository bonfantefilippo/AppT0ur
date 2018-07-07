import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewSensoreNumeroDiGiri {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Numero di giri (RPM)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsng';
    /*data.leanOptions.addOption(
      3,
      'layout',
      false,
      ObjectID.btnLeanChild1,
      false,
      'an1 bsngL'
    );*/
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
