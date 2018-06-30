import { ObjectOfView } from './ObjectOfView';
import { ObjectID } from './object-id.enum';

export class ViewContatoreAcqua {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Contatore Acqua (mc)');
    const objs = [];
    data.objects = objs;

    // TODO NON CI DOVREBBERO ESSERE FIGLI (SENSORI(?))

    data.leanOptions.cssDefault = 'an1 bc';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'an1 bcL');
    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'an1 bcD');
    return data;
  }
}
