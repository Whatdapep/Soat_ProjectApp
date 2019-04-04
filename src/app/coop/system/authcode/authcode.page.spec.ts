import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthcodePage } from './authcode.page';

describe('AuthcodePage', () => {
  let component: AuthcodePage;
  let fixture: ComponentFixture<AuthcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
