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
    this.data.push(ChartDataRecord.createChartRecord(
      [
        {data: [75, 89, 80, 81, 86, 85, 90], label: 'Standard'},
      ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      {responsive: true, barThickness: 1},
      [
        LineChartColors.getGreyTheme()
      ],
      true,
      'bar'
      )
    );
    // fine grafico 1

    // grafico 2
    this.data.push(ChartDataRecord.createChartRecord(
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
    // fine grafico 3


  }

  public static voidChart(): ChartDataRecord {
    return ChartDataRecord.createChartRecord(
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

    return this.data[index].clone();

  }

}

export class ChartDataRecord {
  constructor(public lineChartData: Array<any>,
              public lineChartLabels: Array<any>,
              public lineChartOptions: any,
              public lineChartColors: Array<any>,
              public lineChartLegend: boolean,
              public lineChartType: string,
              public tag: any) {

  }

  public static createChartRecord(lineChartData: Array<any>,
                                  lineChartLabels: Array<any>,
                                  lineChartOptions: any,
                                  lineChartColors: Array<any>,
                                  lineChartLegend: boolean,
                                  lineChartType: string,
                                  tag?: any) {

    return new ChartDataRecord(lineChartData,
      lineChartLabels,
      lineChartOptions,
      lineChartColors,
      lineChartLegend,
      lineChartType,
      tag);
  }

  clone(): ChartDataRecord {

    const chartData = [];
    /*for (const record in this.lineChartData) {
      chartData.push(record);
    }*/
    this.lineChartData.forEach((record) => {
      chartData.push(record);
    });

    const chartLabels = [];
    /*for (const record in this.lineChartLabels) {
      chartLabels.push(record);
    }*/
    this.lineChartLabels.forEach((record) => {
      chartLabels.push(record);
    });

    const chartColors = [];
    /*for (const record in this.lineChartColors) {
      chartColors.push(record);
    }*/
    this.lineChartColors.forEach((record) => {
      chartColors.push(record);
    });
    return ChartDataRecord.createChartRecord(
      chartData,
      chartLabels,
      this.lineChartOptions,
      chartColors,
      this.lineChartLegend,
      this.lineChartType,
      this.tag
    );
  }
}

export class LineChartColors {
  constructor(public backgroundColor,
              public borderColor,
              public borderWidth,
              public pointBackgroundColor,
              public pointBorderColor,
              public pointHoverBackgroundColor,
              public pointHoverBorderColor) {
  }

  public static getGreyTheme(): LineChartColors {
    const t = new LineChartColors(
      'rgba(148,159,177,0.2)',
      'rgba(148,159,177,1)',
      8,
      'rgba(148,159,177,1)',
      '#fff',
      '#fff',
      'rgba(148,159,177,0.8)');
    return t;
  }

  public static getDarkGreyTheme(): LineChartColors {
    const t = new LineChartColors(
      'rgba(77,83,96,0.2)',
      'rgba(77,83,96,1)',
      8,
      'rgba(77,83,96,1)',
      '#fff',
      '#fff',
      'rgba(77,83,96,1)');
    return t;
  }

  public static getBlueTheme(): LineChartColors {
    const t = new LineChartColors(
      'rgba(64,64,96,0.2)',
      'rgba(0,0,96,1)',
      8,
      'rgba(0,0,64,1)',
      '#fff',
      '#fff',
      'rgba(96,96,160,1)');
    return t;
  }
}
