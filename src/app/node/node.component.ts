import {Component, OnInit} from '@angular/core';
import {TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';
import {Router} from '@angular/router';
import {ArchitectService} from '../architect.service';

// http://demos.wijmo.com/5/Angular2/TreeViewIntro/TreeViewIntro/

@Component({
  selector: 'app-node',
  template: '<tree-root class="node" [nodes]="nodes" [options]="options"></tree-root>',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {

  test = '';
  nodes = [];
  constructor(/*public router: Router,*/ public service: ArchitectService) {
    this.nodes = [service.root];
  }

  actionMapping: IActionMapping = {
    mouse: {
      click: ( tree, node, $event) => {
        $event.preventDefault();
        // console.dir(node.data.routerlink);
        this.service.onRoute(node.id);
        // this.router.navigate([node.data.routerlink]);
      },
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
  };

  options: ITreeOptions = {
    actionMapping: this.actionMapping
  };


}
