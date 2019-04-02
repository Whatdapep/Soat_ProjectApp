import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemShareStatementPage } from './mem-share-statement.page';

describe('MemShareStatementPage', () => {
  let component: MemShareStatementPage;
  let fixture: ComponentFixture<MemShareStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemShareStatementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemShareStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
