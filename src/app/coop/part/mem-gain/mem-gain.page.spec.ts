import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemGainPage } from './mem-gain.page';

describe('MemGainPage', () => {
  let component: MemGainPage;
  let fixture: ComponentFixture<MemGainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemGainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemGainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
