import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions, ITreeState} from 'angular-tree-component';
import {ArchitectService} from '../architect.service';
import { ChangeDetectorRef } from '@angular/core';
import {ObjectID} from '../models/object-id.enum';

// http://demos.wijmo.com/5/Angular2/TreeViewIntro/TreeViewIntro/

@Component({
  selector: 'app-node',
  template: `<tree-root #tree class="node"
                        [(state)]="state"
                        [nodes]="nodes"
                        [options]="options"
                        (mouseover)="onObjMouseOver(0)"></tree-root>`,
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements AfterViewInit {

  test = '';
  state: ITreeState;
  nodes = [];

  @ViewChild('tree') tree;

  actionMapping: IActionMapping = {
    mouse: {
      click: ( tree, node, $event) => {
        $event.preventDefault();
        console.log('node click', node, event);
        this.service.onRoute(node.id);
      },
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
  };

  options: ITreeOptions = {
    actionMapping: this.actionMapping
  };

  constructor(public service: ArchitectService, private cdRef: ChangeDetectorRef) {
    this.nodes = [service.root];
  }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
    this.cdRef.detectChanges();
  }
  onObjMouseOver(index) {
    console.log('Node objMouseover ' + index);
    this.service.onMouseOver({curIndex: ObjectID.node});
  }

}
