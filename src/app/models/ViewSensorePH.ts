import {ObjectOfView} from './ObjectOfView';
import {ObjectID} from './object-id.enum';

export class ViewSensorePH {
  public static JSON() {
    const data: ObjectOfView = new ObjectOfView('Sensore di acidità (pH)');
    const objs = [];
    data.objects = objs;

    data.leanOptions.cssDefault = 'an1 bsenph';
    data.digitalOptions.addOption(
      4,
      'QR',
      false,
      ObjectID.btnDigitalChild1,
      false,
      'an1 bsenphD'
    );
    return data;
  }
}
