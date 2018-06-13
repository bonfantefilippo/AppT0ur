import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinituraComponent } from './finitura.component';

describe('FinituraComponent', () => {
  let component: FinituraComponent;
  let fixture: ComponentFixture<FinituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
