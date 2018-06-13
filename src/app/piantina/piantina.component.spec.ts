import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiantinaComponent } from './piantina.component';

describe('PiantinaComponent', () => {
  let component: PiantinaComponent;
  let fixture: ComponentFixture<PiantinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiantinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiantinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
