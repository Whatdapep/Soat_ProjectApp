import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemLoanStatementPage } from './mem-loan-statement.page';

describe('MemLoanStatementPage', () => {
  let component: MemLoanStatementPage;
  let fixture: ComponentFixture<MemLoanStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemLoanStatementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemLoanStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
