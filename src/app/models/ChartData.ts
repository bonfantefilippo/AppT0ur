/**
 * esportiamo 3 classi:
 * ChartDataRecord      oggetto che contiene tutte le proprietà di un singolo grafico
 * LineChartColors      oggetto che contiene le proprietà di una singola serie
 *                    espone dei metodi statici per restituire dei temi già costruiti
 *                      .getGreyTheme()
 *                      .getDarkGreyTheme()
 *                    TODO: aggiungere qui pacchetti tematici per definire le proprietà delle serie
 * ChartData            oggetto che contiene un array di ChartDataRecord
 *                      nel costruttore vengono creati tutti i record che verranno utilizzati nell'applicazione
 *                    TODO: aggiungere qui altri grafici da richiamare nell'applicazione
 *
 */
import {ObjectID} from './object-id.enum';

export class ChartData {
  private data: Array<ChartDataRecord> = [];

  constructor() {

    // grafico 1
    const grafico1 = ChartDataRecord.createChartRecord(
      'grafico1',
      [
        {data: [75, 89, 80, 81, 86, 85, 90, 80], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Current absorption', true, 25, 17, 17, false,
        false, 20, 17, true, null),
      ChartData.ChartOptions1('Current absorption', true, 14, 9, 9, false,
        false, 12, 9, false, null),
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'line'
      )
    ;
    // fine grafico 1

    // grafico 2
    const grafico2 = ChartDataRecord.createChartRecord(
      'grafico2',
      [
        {data: [75, 89, 80, 81, 86, 85, 90, 12], label: 'Standard'},
        {data: [28, 48, 40, 19, 86, 27, 90, 23], label: 'Lean'}
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Current absorption after Lean', true, 25, 17, 17, false,
        false, 20, 17, true, null),
      ChartData.ChartOptions1('Current absorption after Lean', true, 14, 9, 9, false,
        false, 12, 9, false, null),
      [
        LineChartColors.getGreyTheme(),
        LineChartColors.getDarkGreyTheme()
      ],
      true,
      'line'
      )
    ;
    // fine grafico 2


    // grafico 3
    const grafico3 = ChartDataRecord.createChartRecord(
      'grafico3',
      [
        {data: [75, 89, 80, 81, 86, 85, 90, 83], label: 'Standard'},
        {data: [28, 48, 40, 19, 86, 27, 90, 55], label: 'Lean'},
        {data: [78, 48, 77, 9, 100, 27, 40, 66], label: 'Digital'}
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Current absorption after Digital', true, 25, 17, 17, false,
        false, 20, 17, true, null),
      ChartData.ChartOptions1('Current absorption after Digital', true, 14, 9, 9, false,
        false, 12, 9, false, null),
      [
        LineChartColors.getGreyTheme(),
        LineChartColors.getDarkGreyTheme(),
        LineChartColors.getBlueTheme()
      ],
      true,
      'line'
      )
    ;
    // fine grafico 3

    // grafico 4
    const grafico4 = ChartDataRecord.createChartRecord(
      'grafico4',
      [
        {data: [75, 89, 40, 40, 86, 85, 90, 70], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Wastege', true, 25, 17, 17, false,
        false, 20, 17, true, null),
      ChartData.ChartOptions1('Wastege', true, 14, 9, 9, false,
        false, 12, 9, false, null),
      [
        LineChartColors.getRedTheme(),
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 4

    // grafico 5
    const grafico5 = ChartDataRecord.createChartRecord(
      'grafico5',
      [
        {data: [75, 89, 80, 81, 70, 73, 90, 85], label: 'Standard'},
        {data: [70, 80, 75, 79, 66, 65, 70, 71], label: 'Lean'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Wastege  after Lean', true, 25, 17, 17, false,
        false, 20, 17, true, null),
      ChartData.ChartOptions1('Wastege  after Lean', true, 14, 9, 9, false,
        false, 12, 9, false, null),
      [
        LineChartColors.getRedTheme(),
        LineChartColors.getGreenTheme(),
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 5
    // grafico 6
    const grafico6 = ChartDataRecord.createChartRecord(
      'grafico6',
      [
        {data: [75, 89, 80, 81, 70, 73, 90, 85], label: 'Standard'},
        {data: [70, 80, 75, 79, 66, 65, 70, 71], label: 'Lean'},
        {data: [68, 72, 68, 69, 65, 64, 64, 65], label: 'Digital'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      ChartData.ChartOptions1('Wastege after Digital', true, 25, 17, 17, false,
        false, 20, 17, true, null, true),
      ChartData.ChartOptions1('Wastege after Digital', true, 14, 9, 9, false,
        false, 12, 9, false, null, true),
      [
        LineChartColors.getRedTheme(),
        LineChartColors.getGreenTheme(),
        LineChartColors.getBlueTheme()
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 6

    /*// grafico 7
    const grafico7 = ChartDataRecord.createChartRecord(
      'grafico7',
      [
        {data: [2, 2, 80, 81, 12, 12, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 7*/

    const productionBarGraph = ChartDataRecord.createChartRecord(
      'productionBarGraph',
      [{data: [2, 4, 5, 8], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      ChartData.ChartOptions1('Productivity', true, 25, 17, 17, true, true, 20,
        17, true, ChartData.Callback1(' pieces/man-hour')),
      ChartData.ChartOptions1('Productivity', true, 14, 9, 9, true, true, 12,
        9, false, ChartData.Callback1(' pieces/man-hour')),
      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );


    const economicImpactBarGraph = ChartDataRecord.createChartRecord(
      'economicImpactBarGraph',
      [{data: [2.4, 5.8, 10.2, 13.4], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      ChartData.ChartOptions1(['Economic Impact', 'EBITDA %'], true, 25, 17, 17, true, true, 20,
        17, true, ChartData.Callback2('%')),
      ChartData.ChartOptions1(['Economic Impact', 'EBITDA %'], true, 14, 9, 9, true, true, 12,
        9, false, ChartData.Callback2('%')),

      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );

    const workInProgressGraphBar = ChartDataRecord.createChartRecord(
      'workInProgressGraphBar',
      [{data: [194, 54, 50, 42], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      ChartData.ChartOptions1('Work In Progress (WIP)', true, 25, 17, 17, true, true, 20,
        17, true, ChartData.Callback1(' pieces')),
      ChartData.ChartOptions1('Work In Progress (WIP)', true, 14, 9, 9, true, true, 12,
        9, false, ChartData.Callback1(' pieces')),
      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );

    this.data.push(
      grafico1,
      grafico2,
      grafico3,
      grafico4,
      grafico5,
      grafico6,
      /*grafico7,*/
      productionBarGraph,
      economicImpactBarGraph,
      workInProgressGraphBar
    );
    /*this.data[ObjectID.chart1] = grafico1;
    this.data[ObjectID.chart2] = grafico2;
    this.data[ObjectID.chart3] = grafico3;
    this.data[ObjectID.chart4] = grafico4;
    this.data[ObjectID.chart5] = grafico5;
    this.data[ObjectID.chart6] = grafico6;
    this.data[ObjectID.chart7] = productionBarGraph;
    this.data[ObjectID.chart8] = economicImpactBarGraph;
    this.data[ObjectID.chart9] = workInProgressGraphBar;*/
  } // fine costruttore

  public static Callback1(text) {
    return {
      label: function (tooltipItem, data) {
        return (
          data['datasets'][0]['data'][tooltipItem['index']] + text /*' pieces'   ' pieces/man-hour'*/
        );
      }
    };
  }

  public static Callback2(text) {
    return {
      label: function (tooltipItem, data) {
        // get the concerned dataset
        const dataset = data.datasets[tooltipItem.datasetIndex];
        // get the current items value
        const currentValue = dataset.data[tooltipItem.index];

        return currentValue + text /*'%'*/;
      }
    };
  }

  public static ChartOptions1(text, responsive, titleFontSize, scaleFontSizeX, scaleFontSizeY,
                              stackedX, stackedY, tipTitleFontSize, tipFontSize, tipEnable, myCallbacks, legend = false) {
    return {
      responsive: responsive,
      display: true,
      title: {
        display: true,
        position: 'top',
        fontSize: titleFontSize,
        text: text,
        fontStyle: 'bold',
        fontColor: '#000'
      },
      legend: {
        display: legend,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      },
      scales: {
        xAxes: [
          {
            stacked: stackedX,
            ticks: {
              beginAtZero: true,
              fontColor: '#000',
              fontSize: scaleFontSizeX,
              fontStyle: 'bold'
            }
          }
        ],
        yAxes: [
          {
            stacked: stackedY,
            ticks: {
              beginAtZero: true,
              fontColor: '#000',
              fontSize: scaleFontSizeY,
              fontStyle: 'bold'
            }
          }
        ]
      },
      tooltips: {
        enabled: tipEnable,
        mode: 'index',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        titleFontSize: tipTitleFontSize,
        titleFontColor: '#0066ff',
        bodyFontColor: '#FFF',
        bodyFontSize: tipFontSize,
        displayColors: false,
        callbacks: myCallbacks
      }
    };
  }

  public static voidChart(): ChartDataRecord {
    return ChartDataRecord.createChartRecord(
      'grafico vuoto',
      [
        {data: [], label: ''}
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true},
      {responsive: true},
      [
        LineChartColors.getDarkGreyTheme()
      ],
      false,
      'line'
    );
  }

  getCount(): number {
    return this.data.length;
  }

  getChart(index: number): ChartDataRecord {
    console.log('Query chart with index = ' + index);

    return this.data[index]; // .clone();

  }

}

export class ChartSerie {
  constructor(public data: Array<number>, public label: string) {
  }
}

export class ChartDataRecord {
  public name: string;
  public lineChartData: Array<ChartSerie>;
  public lineChartLabels: Array<string>;
  public lineChartOptions: any;
  public lineChartOptionsThumbnail: any;
  public lineChartColors: Array<LineChartColors>;
  public lineChartLegend: boolean;
  public lineChartType: string;
  public tag: any;

  constructor() {

  }

  public static createChartRecord(name: string,
                                  lineChartData: Array<ChartSerie>,
                                  lineChartLabels: Array<string>,
                                  lineChartOptions: any,
                                  lineChartOptionsThumbnail: any,
                                  lineChartColors: Array<LineChartColors>,
                                  lineChartLegend: boolean,
                                  lineChartType: string,
                                  tag?: any) {
    const cdr = new ChartDataRecord;
    cdr.name = name;
    cdr.lineChartData = lineChartData;
    cdr.lineChartLabels = lineChartLabels;
    cdr.lineChartOptions = lineChartOptions;
    cdr.lineChartOptionsThumbnail = lineChartOptionsThumbnail;
    cdr.lineChartColors = lineChartColors;
    cdr.lineChartLegend = lineChartLegend;
    cdr.lineChartType = lineChartType;
    cdr.tag = tag;
    return cdr;
  }

  public static cloneSerie(src: ChartSerie): ChartSerie {

    const data: Array<number> = new Array(src.data.length);
    for (let i = 0; i < src.data.length; i++) {
      data[i] = +src.data[i].toString();
    }

    return new ChartSerie(data, src.label);
  }

  clone(): ChartDataRecord {
    const cdr = new ChartDataRecord;
    this.copyTo(cdr);
    return cdr;
  }


  copyTo(dest: ChartDataRecord): void {

    dest.name = this.name.toString();

    const chartData: Array<ChartSerie> = [];
    this.lineChartData.forEach((record) => {
      chartData.push(ChartDataRecord.cloneSerie(record));
    });
    dest.lineChartData = chartData;

    const chartLabels: Array<string> = [];
    this.lineChartLabels.forEach((record) => {
      chartLabels.push(record.toString());
    });

    dest.lineChartLabels = chartLabels;

    dest.lineChartOptions = this.lineChartOptions;

    dest.lineChartOptionsThumbnail = this.lineChartOptionsThumbnail;

    const chartColors: Array<LineChartColors> = [];
    this.lineChartColors.forEach((record) => {
      chartColors.push(record);
    });

    dest.lineChartColors = chartColors;
    dest.lineChartLegend = this.lineChartLegend;
    dest.lineChartType = this.lineChartType.toString();
    dest.tag = this.tag;
  }


}

export class LineChartColors {
  constructor(public backgroundColor: Array<any>,
              public borderColor,
              public borderWidth,
              public pointBackgroundColor = null,
              public pointBorderColor = null,
              public pointHoverBackgroundColor = null,
              public pointHoverBorderColor = null) {
  }

  public static getGreyTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(148,159,177,0.2)'],
      'rgba(148,159,177,1)',
      2,
      'rgba(148,159,177,1)',
      '#fff',
      '#fff',
      'rgba(148,159,177,0.8)'
    );
    return t;
  }

  public static getDarkGreyTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(77,83,96,0.2)'],
      'rgba(77,83,96,1)',
      2,
      'rgba(77,83,96,1)',
      '#fff',
      '#fff',
      'rgba(77,83,96,1)'
    );
    return t;
  }

  public static getGreenTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(10,240,10,1)'],
      'rgba(0,0,96,1)',
      2,
      'rgba(0,0,64,1)',
      '#fff',
      '#fff',
      'rgba(96,96,160,1)'
    );
    return t;
  }
  public static getRedTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(200,10,10,1)'],
      'rgba(0,0,96,1)',
      2,
      'rgba(0,0,64,1)',
      '#fff',
      '#fff',
      'rgba(96,96,160,1)'
    );
    return t;
  }

  public static getBlueTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(10,10, 240,1)'],
      'rgba(0,0,96,1)',
      2,
      'rgba(0,0,64,1)',
      '#fff',
      '#fff',
      'rgba(96,96,160,1)'
    );
    return t;
  }

  public static getGraphBarTheme(): LineChartColors {
    const t = new LineChartColors(
      [
        'rgba(33, 142, 236, 0.8)',
        'rgba(255, 211, 44, 0.8)',
        'rgba(5, 27, 255, 0.8)',
        'rgba(50, 224, 55, 0.8)'
      ],
      '#000000',
      2
    );
    return t;
  }
}
