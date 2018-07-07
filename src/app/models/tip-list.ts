import {ObjectID} from './object-id.enum';
const _tips = [
  'viewPiantina',

    `Area dello stabilimento adibita al lavaggio dei prodotti. Tocca per entrare e visualizzarne le apparecchiature e le
strutture, questo ti permetterà di provare ad applicare delle migliorie e valutarne l\'impatto.`,
  `Questa è la prima fase del lavaggio. Premi per esplorare.`,
  `Questa è la seconda fase del lavaggio. Premi per esplorare.`,
  `Questa è la terza fase del lavaggio. Premi per esplorare.`,
  `Macchina dedicata al lavaggio. Premi per vedere nel dettaglio la sua sensoristica.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Macchina dedicata al lavaggio. Premi per vedere nel dettaglio la sua sensoristica.`,
  `Macchina dedicata all\'asciugatura. Premi per vedere nel dettaglio la sua sensoristica.`,
  `12 Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Area dello stabilimento adibita al trattamento dei prodotti. Tocca per entrare e visualizzarne le apparecchiature e le
strutture, questo ti permetterà di provare ad applicare delle migliorie e valutarne l\'impatto.`,
  `Questa è la prima fase del trattamento. Premi per esplorare.`,
  `Questa è la seconda fase del trattamento. Premi per esplorare.`,
  `Questa è la terza fase del trattamento. Premi per esplorare.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Area dello stabilimento adibita allo stoccaggio dei prodotti. Tocca per entrare e visualizzarne le apparecchiature e le
strutture, questo ti permetterà di provare ad applicare delle migliorie e valutarne l\'impatto.`,
  `Macchinari dedicati allo stoccaggio. Premi per vedere nel dettaglio la loro sensoristica.`,
  `Macchina dedicata allo stoccaggio. Premi per vedere nel dettaglio la sua sensoristica.`,
  `Macchina dedicata allo stoccaggio. Premi per vedere nel dettaglio la sua sensoristica.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Premi per vedere nel dettaglio i valori misurati da questo sensore.`,
  `Questo pulsante permette di attivare o disattivare la possibilità di introdurre ottimizzazioni nel
processo, implementazione Lean. Guarda poco più in basso: compariranno dei nuovi bottoni
che ti permetteranno di scegliere l\'leanChange.`,
  `Questo pulsante permette di attivare o disattivare la possibilità di digitalizzare il processo, implementazione
Digital. Guarda poco più in basso: compariranno dei nuovi bottoni che ti permetteranno di
scegliere la tecnologia.`,
  `Premi sul bottone layout per vedere gli effetti della metodologia Lean.
Per vedere l\'implementazione Digital premi anche il pulsante corrispondente.`,
  `LeanChild2`,
  `Premi sul bottone QR per vedere gli effetti delle implementazioni Digital.`,
  `digitalChild2`,
  `Questi grafici mostrano i benefici della metodologia Lean e delle implementazioni Digital
secondo diversi parametri. Premi per vedere nel dettaglio.`,
  `chart2`,
  `chart3`,
  `chart4`,
  `chart5`,
  `chart6`,
  `chart7`,
  `chart8`,
  `chart9`,
  `chart10`,
  `chart11`,
  `chart12`,
  `chart13`,
  `questo è l'albero dell\'impianto`

];
export class TipList {
  constructor() {}
  public getTip(index: ObjectID) {
    return _tips[index];
  }
}
