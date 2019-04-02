import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemDispositStatementPage } from './mem-disposit-statement.page';

describe('MemDispositStatementPage', () => {
  let component: MemDispositStatementPage;
  let fixture: ComponentFixture<MemDispositStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemDispositStatementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemDispositStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
