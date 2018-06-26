import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts';


import {ObjectID} from './models/object-id.enum';
import {AppComponent} from './app.component';
import {GraficiComponent} from './grafici/grafici.component';
import {OptionBtnsComponent} from './optimize/option-btns/option-btns.component';
import {TipsComponent} from './tips/tips.component';
import {OptimizeComponent} from './optimize/optimize.component';
import {ViewComponent} from './view/view.component';
import {ObjectViewComponent} from './object-view/object-view.component';
import {ArchitectService} from './architect.service';
import {LeanComponent} from './optimize/option-btns/lean/lean.component';
import {DigitalComponent} from './optimize/option-btns/digital/digital.component';
import {WorkInProgressComponent} from './work-in-progress/work-in-progress.component';
import {AppChartComponent} from './charts/app-chart/app-chart.component';
import {MatIconModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartMirrorComponent} from './charts/chart-mirror/chart-mirror.component';
import {TreeModule} from 'angular-tree-component';
import { NodeComponent } from './node/node.component';

const appRoutes: Routes = [
  {path: 'apptour/:contextID', component: ObjectViewComponent},
  {path: 'chart/:contextID', component: ChartMirrorComponent},
  {path: 'not_yet_but_soon', component: WorkInProgressComponent},
  {
    path: 'home',
    redirectTo: 'apptour/' + ObjectID.viewHome,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'apptour/' + ObjectID.viewHome,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not_yet_but_soon'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GraficiComponent,
    OptionBtnsComponent,
    TipsComponent,
    OptimizeComponent,
    ViewComponent,
    ObjectViewComponent,
    LeanComponent,
    DigitalComponent,
    WorkInProgressComponent,
    AppChartComponent,
    ChartMirrorComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    ChartsModule,
    MatTabsModule,
    MatIconModule,
    TreeModule
  ],
  providers: [ArchitectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
