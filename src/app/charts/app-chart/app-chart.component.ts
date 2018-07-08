import {Component, Input} from '@angular/core';;
import {ChartDataRecord} from '../../models/ChartData';
import {ArchitectService} from '../../architect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-chart',
  templateUrl: '../charts.html',
  styleUrls: ['../charts.css']
})
export class AppChartComponent {

  @Input()
  data: ChartDataRecord;
  constructor(public service: ArchitectService, public router: Router) {
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
