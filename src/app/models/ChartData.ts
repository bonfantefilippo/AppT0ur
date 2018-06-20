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
      'garfico 1',
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
    this.data.push(ChartDataRecord.createChartRecord(
      'garfico 4',
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
    );
    // fine grafico 4

    // grafico 5
    this.data.push(ChartDataRecord.createChartRecord(
      'garfico 5',
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
    );
    // fine grafico 5

    // grafico 6
    this.data.push(ChartDataRecord.createChartRecord(
      'garfico 6',
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
    );
    // fine grafico 6

    // grafico 7
    this.data.push(ChartDataRecord.createChartRecord(
      'garfico 7',
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
    );
    // fine grafico 7

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

    return new ChartSerie(data, src.label.toString());
  }
  clone(): ChartDataRecord {
    const cdr = new ChartDataRecord;
    this.copyTo(cdr);
    return cdr;
    /*const chartData = [];
    /!*for (const record in this.lineChartData) {
      chartData.push(record);
    }*!/
    this.lineChartData.forEach((record) => {
      chartData.push(record);
    });

    const chartLabels = [];
    /!*for (const record in this.lineChartLabels) {
      chartLabels.push(record);
    }*!/
    this.lineChartLabels.forEach((record) => {
      chartLabels.push(record);
    });

    const chartColors = [];
    /!*for (const record in this.lineChartColors) {
      chartColors.push(record);
    }*!/
    this.lineChartColors.forEach((record) => {
      chartColors.push(record);
    });
    return ChartDataRecord.createChartRecord(
      this.name.toString(),
      chartData,
      chartLabels,
      this.lineChartOptions,
      chartColors,
      this.lineChartLegend,
      this.lineChartType,
      this.tag
    );*/
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
      2,
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
      2,
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
      2,
      'rgba(0,0,64,1)',
      '#fff',
      '#fff',
      'rgba(96,96,160,1)');
    return t;
  }
}
