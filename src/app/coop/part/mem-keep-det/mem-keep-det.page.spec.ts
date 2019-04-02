import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemKeepDetPage } from './mem-keep-det.page';

describe('MemKeepDetPage', () => {
  let component: MemKeepDetPage;
  let fixture: ComponentFixture<MemKeepDetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemKeepDetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemKeepDetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
