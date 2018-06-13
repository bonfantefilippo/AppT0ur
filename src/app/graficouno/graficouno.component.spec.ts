import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficounoComponent } from './graficouno.component';

describe('GraficounoComponent', () => {
  let component: GraficounoComponent;
  let fixture: ComponentFixture<GraficounoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficounoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
