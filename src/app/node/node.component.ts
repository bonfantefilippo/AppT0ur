import { Component, OnInit } from '@angular/core';
import {TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';
import {Router} from '@angular/router';
import {ObjectID} from '../models/object-id.enum';

@Component({
  selector: 'app-node',
  template: '<tree-root class="node" [nodes]="nodes" [options]="options"></tree-root>',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {

  test: string = '';

  constructor(public router: Router) {
  }

  nodes = [
    {
      id: 45,
      name: 'Sezione Lavaggio',
      children: [
        { id: 2, name: 'Prelavaggio', children: [
            { id: 3, name: 'Pompa Acqua' },
            { id: 4, name: 'Contatore Acqua' },
            { id: 5, name: 'Sensore Temperatura' },
            { id: 6, name: 'Sensore Livello Acqua' }
          ]
        },
        { id: 7, name: 'Lavaggio', children: [
            { id: 8, name: 'Pompa' },
            { id: 9, name: 'Contatore Acqua' },
            { id: 10, name: 'Sensore Temperatura' },
            { id: 11, name: 'Sensore Livello Acqua' },
          ]
        },
        { id: 12, name: 'Asciugatura', children: [
            { id: 13, name: 'Ventilatore' },
            { id: 14, name: 'Contatore Acqua' },
            { id: 15, name: 'Sensore Temperatura' },
            { id: 16, name: 'Sensore Umidità' },
          ]
        }
      ]
    },
    {
      id: 17,
      name: 'Sezione Pretrattamento',
      children: [
        { id: 18, name: 'Vasca Pretrattamento', children: [
            { id: 19, name: 'Sensore Livello' },
            { id: 20, name: 'Sensore PH' }
          ]
        },
        { id: 21, name: 'Vasca Primer', children: [
            { id: 22, name: 'Sensore Livello' },
            { id: 23, name: 'Sensore PH' }
          ]
        },
        { id: 24, name: 'Vasca Finisher', children: [
            { id: 25, name: 'Sensore Livello' },
            { id: 26, name: 'Sensore PH' }
          ]
        }
      ]
    },
    {
      id: 27,
      name: 'Sezione Stoccaggio',
      children: [
        { id: 28, name: 'Impilatore', children: [
            { id: 29, name: 'Motore 1' },
            { id: 30, name: 'Motore 2' }
          ]
        }
      ]
    }
  ];
  options: ITreeOptions = {
    actionMapping
  };
}

const actionMapping:IActionMapping = {
  mouse: {
    click: (tree, node, $event) => {
      $event.preventDefault();
      console.dir(node.data.name);
    },
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
}
