import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemStatusPage } from './mem-status.page';

describe('MemStatusPage', () => {
  let component: MemStatusPage;
  let fixture: ComponentFixture<MemStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
