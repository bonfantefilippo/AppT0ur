import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMirrorComponent } from './chart-mirror.component';

describe('ChartMirrorComponent', () => {
  let component: ChartMirrorComponent;
  let fixture: ComponentFixture<ChartMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
