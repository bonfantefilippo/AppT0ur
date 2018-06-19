import {ObjectID} from './object-id.enum';
import {ObjectOfView} from './ObjectOfView';

export class ViewSezioneLavaggio {
  public static JSON () {
    const data: ObjectOfView = new ObjectOfView('ViewSezioneLavaggio');
    const objs = [];
    data.objects = objs;

    objs.push({'routerLink': '/apptour/' + ObjectID.viewPrelavaggio, 'childId': 'child1', 'contextID': ObjectID.viewPrelavaggio});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewLavaggio, 'childId': 'child2', 'contextID': ObjectID.viewLavaggio});
    objs.push({'routerLink': '/apptour/' + ObjectID.viewAsciugatura, 'childId': 'child3', 'contextID': ObjectID.viewAsciugatura});

    data.leanOptions.cssDefault = 'angus3Default sfondoSezioneLavaggioDefault';

    data.leanOptions.addOption(3, 'layout', false, ObjectID.btnLeanChild1, false, 'angus3Default sfondoSezioneLavaggioDefault angus3Lean sfondoSezioneLavaggio');

    data.digitalOptions.addOption(4, 'QR', false, ObjectID.btnDigitalChild1, false, 'angus3Default sfondoSezioneLavaggioDefault angus3Lean sfondoSezioneLavaggio angus3Digital sfondoSezioneLavaggioDigital');
    return data;

  }
}
