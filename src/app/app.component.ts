import { Component } from '@angular/core';
import {ArchitectService} from './architect.service';
import {Router} from '@angular/router';
import {ObjectID} from './models/object-id.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public service: ArchitectService, public router: Router) {
    this.router.navigate(['apptour/' + ObjectID.viewHome]);
  }

  homeRedirect() {
    this.router.navigate(['apptour/' + ObjectID.viewHome]);
  }

}
