import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemCollPage } from './mem-coll.page';

describe('MemCollPage', () => {
  let component: MemCollPage;
  let fixture: ComponentFixture<MemCollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemCollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemCollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
