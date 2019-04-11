import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckloginPage } from './checklogin.page';

describe('CheckloginPage', () => {
  let component: CheckloginPage;
  let fixture: ComponentFixture<CheckloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
