import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBtnsComponent } from './option-btns.component';

describe('OptionBtnsComponent', () => {
  let component: OptionBtnsComponent;
  let fixture: ComponentFixture<OptionBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
