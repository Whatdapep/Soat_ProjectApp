import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPostPage } from './board-post.page';

describe('BoardPostPage', () => {
  let component: BoardPostPage;
  let fixture: ComponentFixture<BoardPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
