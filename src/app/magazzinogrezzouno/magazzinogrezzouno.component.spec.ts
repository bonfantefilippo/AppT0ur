import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazzinogrezzounoComponent } from './magazzinogrezzouno.component';

describe('MagazzinogrezzounoComponent', () => {
  let component: MagazzinogrezzounoComponent;
  let fixture: ComponentFixture<MagazzinogrezzounoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazzinogrezzounoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazzinogrezzounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
