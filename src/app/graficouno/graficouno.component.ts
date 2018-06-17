import {Component, OnInit} from '@angular/core';
import {ArchitectService} from '../architect.service';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-graficouno',
  templateUrl: './graficouno.component.html',
  styleUrls: ['./graficouno.component.css']
})
export class GraficounoComponent implements OnInit {
  ObjectID = ObjectID;

  classe;

  constructor(public service: ArchitectService) {
    this.service.grafici.subscribe(res => {
      this.classe = this.service.changeClassGraphFirst().first;
    });
  }

  ngOnInit() {
    this.classe = this.service.changeClassGraphFirst().first;
  }

  back() {
    window.history.back();
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }


}
