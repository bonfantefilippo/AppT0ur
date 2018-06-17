import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { GraficiComponent } from './grafici/grafici.component';
import { BottommenuComponent } from './bottommenu/bottommenu.component';
import { TipsComponent } from './tips/tips.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { ViewComponent } from './view/view.component';
import { ObjectViewComponent } from './object-view/object-view.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ArchitectService } from './architect.service';
import { LeanComponent } from './lean/lean.component';
import { DigitalComponent } from './digital/digital.component';
import { GraficounoComponent } from './graficouno/graficouno.component';
import { Graph10Component } from './graph10/graph10.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { AppChartComponent } from './app-chart/app-chart.component';


const appRoutes: Routes = [
  { path: 'piantina', component: ObjectViewComponent },
  { path: 'magazzino', component: MagazzinoComponent },
  { path: 'preparazione', component: WorkInProgressComponent },
  { path: 'lavorazione', component: WorkInProgressComponent },
  { path: 'finitura', component: WorkInProgressComponent },
  { path: 'magazzinofinale', component: WorkInProgressComponent },
  { path: 'magG1', component: WorkInProgressComponent },
  { path: 'magG2', component: WorkInProgressComponent },
  { path: 'magG3', component: WorkInProgressComponent },
  { path: 'grafico1', component: GraficounoComponent },
  { path: 'graph10', component: Graph10Component },
  { path: 'chart', component: AppChartComponent },
  { path: '',
    redirectTo: 'object-view',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'object-view' }
];

@NgModule({
  declarations: [
    AppComponent,
    GraficiComponent,
    BottommenuComponent,
    TipsComponent,
    TopmenuComponent,
    ViewComponent,
    ObjectViewComponent,
    MagazzinoComponent,
    LeanComponent,
    DigitalComponent,
    GraficounoComponent,
    Graph10Component,
    WorkInProgressComponent,
    AppChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ChartsModule
  ],
  providers: [ArchitectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
