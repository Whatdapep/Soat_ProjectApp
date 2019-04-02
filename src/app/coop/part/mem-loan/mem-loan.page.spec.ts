import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemLoanPage } from './mem-loan.page';

describe('MemLoanPage', () => {
  let component: MemLoanPage;
  let fixture: ComponentFixture<MemLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemLoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
