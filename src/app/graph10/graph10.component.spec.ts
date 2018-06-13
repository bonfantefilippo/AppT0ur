import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph10Component } from './graph10.component';

describe('Graph10Component', () => {
  let component: Graph10Component;
  let fixture: ComponentFixture<Graph10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
