import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppedPage } from './stopped.page';

describe('StoppedPage', () => {
  let component: StoppedPage;
  let fixture: ComponentFixture<StoppedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoppedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
