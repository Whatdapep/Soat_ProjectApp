import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemKeepDetStatementPage } from './mem-keep-det-statement.page';

describe('MemKeepDetStatementPage', () => {
  let component: MemKeepDetStatementPage;
  let fixture: ComponentFixture<MemKeepDetStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemKeepDetStatementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemKeepDetStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
