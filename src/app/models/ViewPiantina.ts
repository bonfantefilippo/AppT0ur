import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './TreeBuilder';

export class ViewPiantina {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewPiantina');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewMagazzino, 'childId': 'child1', 'contextID': ObjectID.piantinaChild1});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewPreparazione, 'childId': 'child2', 'contextID': ObjectID.piantinaChild2});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewLavorazione, 'childId': 'child3', 'contextID': ObjectID.piantinaChild3});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewFinitura, 'childId': 'child4', 'contextID': ObjectID.piantinaChild4});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewMagazzinoF, 'childId': 'child5', 'contextID': ObjectID.piantinaChild5});

    data.leanOptions.cssDefault = 'container5v1';
    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'container5v2');
    /*data.leanOptions.addOption(5, 'opt2', true, ObjectID.btnLeanChild2, false, 'container5v3');
    data.leanOptions.addOption(1, 'opt3', false, ObjectID.btnLeanChild1, false);*/

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1);
    data.digitalOptions.addOption(5, 'Current', true, ObjectID.btnDigitalChild2);
    data.digitalOptions.addOption(6, 'FC', true, ObjectID.btnDigitalChild1);
    data.digitalOptions.addOption(7, 'Temp', true, ObjectID.btnDigitalChild2);
    data.digitalOptions.addOption(8, 'Light', true, ObjectID.btnDigitalChild1);

    /*data.setClasses('container5v1', 'sfondoBasePiantina',
    'container5v1', 'sfondoBasePiantina', 'container5v1', 'sfondoBasePiantina'); */
    return data;

  }
}
