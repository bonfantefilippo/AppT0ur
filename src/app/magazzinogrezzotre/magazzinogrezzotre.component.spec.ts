import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazzinogrezzotreComponent } from './magazzinogrezzotre.component';

describe('MagazzinogrezzotreComponent', () => {
  let component: MagazzinogrezzotreComponent;
  let fixture: ComponentFixture<MagazzinogrezzotreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazzinogrezzotreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazzinogrezzotreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
