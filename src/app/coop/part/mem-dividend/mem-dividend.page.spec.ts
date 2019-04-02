import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemDividendPage } from './mem-dividend.page';

describe('MemDividendPage', () => {
  let component: MemDividendPage;
  let fixture: ComponentFixture<MemDividendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemDividendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemDividendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
