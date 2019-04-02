import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListPage } from './board-list.page';

describe('BoardListPage', () => {
  let component: BoardListPage;
  let fixture: ComponentFixture<BoardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
