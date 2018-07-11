import {Component, Input} from '@angular/core';
import {ChartDataRecord} from '../../models/AppChartData';
import {ArchitectService} from '../../architect.service';

@Component({
  selector: 'app-app-chart',
  template:
    `<div class="gridInNine">
      <canvas class="center" baseChart width="320" height="255"
              [datasets]="datasets"
              [labels]="labels"
              [options]="options"
              [colors]="colors"
              [legend]="legend"
              [chartType]="chartType"
              (chartHover)="chartHovered($event)"
              (chartClick)="chartClicked($event)">
      </canvas>
    </div>`,
  styleUrls: ['../charts.css']
})
export class AppChartComponent {

  @Input()
  data: ChartDataRecord;

  constructor(public service: ArchitectService) {
    console.log('Chart constructor');
  }

  public chartClicked(e: any): void {
    console.log('chartClicked', this.data.chartID, e);
    // il contenitore genera il routing verso la view e bisogna comunicare
    // al service i dati per girarli nella view
    this.service.onChartRoute(this.data);
  }

  public chartHovered(e: any): void {
    this.service.onMouseOver(this.data.chartID);
  }

  get datasets() {
    return this.data.lineChartData;
  }

  get labels() {
    return this.data.lineChartLabels;
  }

  get options() {
    return this.data.lineChartOptionsThumbnail;
  }

  get colors() {
    return this.data.lineChartColors;
  }

  get legend() {
    return false;
  }

  get chartType() {
    return this.data.lineChartType;
  }

}
