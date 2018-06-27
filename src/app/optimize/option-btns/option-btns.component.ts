import { Component, OnInit } from '@angular/core';
import { ArchitectService} from '../../architect.service';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './option-btns.component.html',
  styleUrls: ['./option-btns.component.css']
})
export class OptionBtnsComponent implements OnInit {
// todo: ricevere il nodo arttivo e operare sul record direttamente
  leanStato = false;
  digitalStato = false;
  constructor(public service: ArchitectService) {
    this.service.leanClick.subscribe(result => {
      this.leanStato = result.stato;
    });
    this.service.digitalClick.subscribe(result => {
      this.digitalStato = result.stato;
    });
  }

  ngOnInit() {
  }
}
