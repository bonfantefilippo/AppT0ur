import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensoreCorrenteAssorbita {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Corrente Assorbita (A)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsca';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bscaD'
    );
    return data;
  }
}
