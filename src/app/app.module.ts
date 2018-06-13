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
import { PiantinaComponent } from './piantina/piantina.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { PreparazioneComponent } from './preparazione/preparazione.component';
import { LavorazioneComponent } from './lavorazione/lavorazione.component';
import { FinituraComponent } from './finitura/finitura.component';
import { StorageService } from './storage.service';
import { LeanComponent } from './lean/lean.component';
import { DigitalComponent } from './digital/digital.component';
import { IntroComponent } from './intro/intro.component';
import { MagazzinofinaleComponent } from './magazzinofinale/magazzinofinale.component';
import { MagazzinogrezzounoComponent } from './magazzinogrezzouno/magazzinogrezzouno.component';
import { GraficounoComponent } from './graficouno/graficouno.component';
import { MagazzinogrezzodueComponent } from './magazzinogrezzodue/magazzinogrezzodue.component';
import { MagazzinogrezzotreComponent } from './magazzinogrezzotre/magazzinogrezzotre.component';
import { Graph10Component } from './graph10/graph10.component';


const appRoutes: Routes = [
  { path: 'piantina', component: PiantinaComponent },
  { path: 'magazzino', component: MagazzinoComponent },
  { path: 'preparazione', component: PreparazioneComponent },
  { path: 'lavorazione', component: LavorazioneComponent },
  { path: 'finitura', component: FinituraComponent },
  { path: 'magazzinofinale', component: MagazzinofinaleComponent },
  { path: 'magG1', component: MagazzinogrezzounoComponent },
  { path: 'magG2', component: MagazzinogrezzodueComponent },
  { path: 'magG3', component: MagazzinogrezzotreComponent },
  { path: 'grafico1', component: GraficounoComponent },
  { path: 'graph10', component: Graph10Component },
  { path: '',
    redirectTo: 'piantina',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GraficiComponent,
    BottommenuComponent,
    TipsComponent,
    TopmenuComponent,
    ViewComponent,
    PiantinaComponent,
    MagazzinoComponent,
    PreparazioneComponent,
    LavorazioneComponent,
    FinituraComponent,
    LeanComponent,
    DigitalComponent,
    IntroComponent,
    MagazzinofinaleComponent,
    MagazzinogrezzounoComponent,
    GraficounoComponent,
    MagazzinogrezzodueComponent,
    MagazzinogrezzotreComponent,
    Graph10Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
