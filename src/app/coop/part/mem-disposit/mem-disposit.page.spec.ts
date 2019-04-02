import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemDispositPage } from './mem-disposit.page';

describe('MemDispositPage', () => {
  let component: MemDispositPage;
  let fixture: ComponentFixture<MemDispositPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemDispositPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemDispositPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
