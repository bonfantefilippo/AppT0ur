import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazzinogrezzodueComponent } from './magazzinogrezzodue.component';

describe('MagazzinogrezzodueComponent', () => {
  let component: MagazzinogrezzodueComponent;
  let fixture: ComponentFixture<MagazzinogrezzodueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazzinogrezzodueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazzinogrezzodueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
