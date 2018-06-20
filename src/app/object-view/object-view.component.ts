import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';
import {ICallback} from '../models/ICallback';
import {ObjectOfView} from '../models/ObjectOfView';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-piantina',
  templateUrl: './object-view.component.html',
  styleUrls: ['./obsoleto/stylePiantina.scss',
    './obsoleto/styleMagazzino.scss',
    './styleAngus.scss',
    './styleAngusBackground.scss']
})

/*

  per intercettare gli eventi di routing
  https://stackoverflow.com/questions/33571605/angular-2-how-to-navigate-to-another-route-using-this-router-parent-navigate

  https://toddmotto.com/dynamic-page-titles-angular-2-router-events

  leggere i parametri
  https://stackoverflow.com/questions/40275862/how-to-get-parameter-on-angular2-route-in-angular-way

  compatibilità rxjs
  https://github.com/shlomiassaf/ngx-modialog/issues/426

 */
export class ObjectViewComponent implements OnInit, ICallback {
  ObjectID = ObjectID;
  contextID: ObjectID = ObjectID.notSet;
  private _subscription: Subscription;
  data: ObjectOfView;
  public css = '';
  private UID = 0;
  // private lean: boolean [];
  // private digital: boolean[];


  constructor(private router: Router, private route: ActivatedRoute, public service: ArchitectService) {
    this.service.leanChange.subscribe(() => {
      this.updateOptions();
    });
    this.service.digitalChange.subscribe(() => {
      this.updateOptions();
    });
    this.service.route.subscribe(result => {
      console.log('View routed ' + result);
    });

  }

  register(contextID: number) {
    this.UID = this.service.registerObject(this, contextID);
    if (this.UID == -1) {
      this.router.navigate(['notFound']);
      return;
    }
    this.contextID = contextID;
  }

  ngOnInit() {
    console.log('ObjView ' + this.contextID + ' init before register');
    /*this.register( this.route.snapshot.params['contextID']);
    console.log('ObjView ' + this.contextID + ' init: registered');*/
    this.route.params.subscribe(params => {
        console.log('ObjView ' + this.contextID + ' init: route.subscribe');
        this.register(params['contextID']);
        console.log('ObjView ' + this.contextID + ' init: route registered');
      }
    );
    console.log('ObjView  ' + this.contextID + ' init: after registerObject');
    /*this.UID = this.service.registerObject(this, this.contextID);

    console.log('ObjView ' + this.contextID + ' init: before register route');
    if (this.contextID == ObjectID.notSet) {

      console.log('ObjView ' + this.contextID + ' init: register route: subscribe ');
      /!* this._subscription = this.router.events
         .subscribe((event) => {
           if (event instanceof NavigationEnd) {
             console.log('ObjView ' + this.contextID + ' NavigationEnd:', event);
             /!*const response = this.service.getActiveChart();
             if (response.valid) {
               this.data = response.data;
             }*!/
           }
         });*!/
      // fino al momento del subscribe non riceviamo alcun evento
      // quindi andiamo a prenderci i dati subito e usciamo, per evitare
      // che i dati di default sovrascivano quelli appena ricevuti
      /!* const result = this.service.getActiveChart();
       if (result.valid) {
         this.data = result.data;
       }*!/
      console.log('ObjView ' + this.contextID + ' init: End 1');*/

  }


  isBusy() {
    return (this._subscription && !this._subscription.closed);
  }

  // todo: compilare la stringa dei css per tutte le opzioni attive
  updateOptions() {
    console.log('updateLeanOptions lean: ', this.data.leanOptions.options, this.data.digitalOptions.options);
    let cssResult: string = this.data.leanOptions.cssDefault;

    this.data.leanOptions.options.forEach(option => {
      if (option.checked) {
        cssResult = option.css;
      }
    });

    this.data.digitalOptions.options.forEach(option => {
      if (option.checked) {
        cssResult = option.css;
      }
    });

    console.log('updateOptions css: ' + cssResult);
    this.css = cssResult;
  }

  setData(data: ObjectOfView) {
    console.log('objectView ' + this.contextID + ' setdata');
    this.data = data;
    this.css = this.data.leanOptions.cssDefault;
    this.updateOptions();
  }


  onDivMouseOver(index) {
    console.log('Piantina mouseover ' + index);
    this.service.onMouseOver({curIndex: index});
  }

  onClick(index) {
    console.log('Piantina click ' + index);
    this.service.onRoute(index);
  }

}
