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
export class ChartData {
  private data: Array<ChartDataRecord> = [];

  constructor() {

    // grafico 1
    const grafico1 = ChartDataRecord.createChartRecord(
      'grafico1',
      [
        {data: [75, 89, 80, 81, 86, 85, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'line'
      )
    ;
    // fine grafico 1
    /*
       // grafico 2
        this.data.push(ChartDataRecord.createChartRecord(
          'grafico 2',
          [
            {data: [75, 89, 80, 81, 86, 85, 90], label: 'Standard'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Lean'}
          ],
          ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
          {responsive: true},
          [
            LineChartColors.getGreyTheme(),
            LineChartColors.getDarkGreyTheme()
          ],
          true,
          'line'
          )
        );
        // fine grafico 2


        // grafico 3
        this.data.push(ChartDataRecord.createChartRecord(
          'grafico 3',
          [
            {data: [75, 89, 80, 81, 86, 85, 90], label: 'Standard'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Lean'},
            {data: [78, 48, 77, 9, 100, 27, 40], label: 'Digital'}
          ],
          ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
          {responsive: true},
          [
            LineChartColors.getGreyTheme(),
            LineChartColors.getDarkGreyTheme(),
            LineChartColors.getBlueTheme()
          ],
          true,
          'line'
          )
        );
        // fine grafico 3*/

    // grafico 4
    const grafico4 = ChartDataRecord.createChartRecord(
      'grafico4',
      [
        {data: [75, 89, 40, 40, 86, 85, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
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
        {data: [75, 89, 80, 81, 12, 12, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
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
        {data: [4, 4, 80, 81, 12, 4, 4], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 6

    // grafico 7
    const grafico7 = ChartDataRecord.createChartRecord(
      'grafico7',
      [
        {data: [2, 2, 80, 81, 12, 12, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'bar'
      )
    ;
    // fine grafico 7

    const productionBarGraph = ChartDataRecord.createChartRecord(
      'productionBarGraph',
      [{data: [2, 4, 5, 8], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      {
        responsive: true,
        display: true,
        title: {
          display: true,
          position: 'top',
          fontSize: 25,
          text: 'Productivity',
          fontStyle: 'bold',
          fontColor: '#000'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold'
              }
            }
          ]
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          titleFontSize: 20,
          titleFontColor: '#0066ff',
          bodyFontColor: '#FFF',
          bodyFontSize: 17,
          displayColors: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return (
                data['datasets'][0]['data'][tooltipItem['index']] +
                ' pieces/man-hour'
              );
            }
            /* afterLabel: function(tooltipItem, data) {
              const sum = data.datasets.reduce((sum, dataset) => {
                return sum + dataset.data[tooltipItem.index];
              }, 0);
              const percent = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / sum * 100;
              percent = percent.toFixed(2); // make a nice string
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + percent + '%';
            }*/
          }
        }
      },
      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );


    const economicImpactBarGraph = ChartDataRecord.createChartRecord(
      'economicImpactBarGraph',
      [{data: [2.4, 5.8, 10.2, 13.4], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      {
        responsive: true,
        display: true,
        title: {
          display: true,
          position: 'top',
          fontSize: 25,
          text: ['Economic Impact', 'EBITDA %'],
          fontStyle: 'bold',
          fontColor: '#000'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold',
                callback: function (value) {
                  return value + '%';
                }
              }
            }
          ]
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          titleFontSize: 20,
          titleFontColor: '#0066ff',
          bodyFontColor: '#FFF',
          bodyFontSize: 17,
          displayColors: false,
          callbacks: {
            label: function (tooltipItem, data) {
              // get the concerned dataset
              const dataset = data.datasets[tooltipItem.datasetIndex];
              // get the current items value
              const currentValue = dataset.data[tooltipItem.index];

              return currentValue + '%';
            }
          }
        }
      },
      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );

    const workInProgressGraphBar = ChartDataRecord.createChartRecord(
      'workInProgressGraphBar',
      [{data: [194, 54, 50, 42], label: null}],
      ['Before Lean', 'After Lean', 'After Digital 1', 'After Digital 2'],
      {
        responsive: true,
        display: true,
        title: {
          display: true,
          position: 'top',
          fontSize: 25,
          text: 'Work In Progress (WIP)',
          fontStyle: 'bold',
          fontColor: '#000'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: '#000',
                fontSize: 17,
                fontStyle: 'bold'
              }
            }
          ]
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          titleFontSize: 20,
          titleFontColor: '#0066ff',
          bodyFontColor: '#FFF',
          bodyFontSize: 17,
          displayColors: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return (
                data['datasets'][0]['data'][tooltipItem['index']] + ' pieces'
              );
            }
          }
        }
      },
      [LineChartColors.getGraphBarTheme()],
      false,
      'bar'
    );

    this.data.push(
      productionBarGraph,
      economicImpactBarGraph,
      workInProgressGraphBar,
      grafico1,
      grafico7
    );
  } // fine costruttore

  public static notResponsiveOptions(origin: any) {
    const no = {
      responsive: origin.responsive,
      display: origin.display,
      title: origin.title,
      legend: origin.legend,
      scales: origin.scales,
      tooltips: origin.tooltips
    };
    return no;
  }

  public static voidChart(): ChartDataRecord {
    return ChartDataRecord.createChartRecord(
      'grafico vuoto',
      [
        {data: [], label: ''}
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
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
                                  lineChartColors: Array<LineChartColors>,
                                  lineChartLegend: boolean,
                                  lineChartType: string,
                                  tag?: any) {
    const cdr = new ChartDataRecord;
    cdr.name = name;
    cdr.lineChartData = lineChartData;
    cdr.lineChartLabels = lineChartLabels;
    cdr.lineChartOptions = lineChartOptions;
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

  public static getBlueTheme(): LineChartColors {
    const t = new LineChartColors(
      ['rgba(244,255,46,1)'],
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
