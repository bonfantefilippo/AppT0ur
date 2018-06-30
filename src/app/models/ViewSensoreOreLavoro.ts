import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewSensoreOreLavoro {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Tempo lavoro (ore)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsolav';
    /*data.leanOptions.addOption(
      3,
      'layout',
      false,
      ObjectID.btnLeanChild1,
      false,
      'an1 bsolavL'
    );
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsolavD'
    );*/
    return data;
  }
}
