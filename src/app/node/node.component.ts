import {Component, OnInit} from '@angular/core';
import {TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';
import {Router} from '@angular/router';
import {ArchitectService} from '../architect.service';

// todo: correggere il metodo per il routing: il click sull'albero genera un errore nel router
let mRouter: Router;

@Component({
  selector: 'app-node',
  template: '<tree-root class="node" [nodes]="nodes" [options]="options"></tree-root>',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {

  test = '';
  nodes = [];
  constructor(public router: Router, service: ArchitectService) {
    mRouter = router;
    this.nodes = [service.root];
  }

  options: ITreeOptions = {
    actionMapping
  };
}

const actionMapping: IActionMapping = {
  mouse: {
    click: ( tree, node, $event) => {
      $event.preventDefault();
      console.dir(node.data.routerlink);
      mRouter.navigate(node.data.routerlink);
    },
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};
