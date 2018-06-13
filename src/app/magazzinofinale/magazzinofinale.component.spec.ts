import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazzinofinaleComponent } from './magazzinofinale.component';

describe('MagazzinofinaleComponent', () => {
  let component: MagazzinofinaleComponent;
  let fixture: ComponentFixture<MagazzinofinaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazzinofinaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazzinofinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
