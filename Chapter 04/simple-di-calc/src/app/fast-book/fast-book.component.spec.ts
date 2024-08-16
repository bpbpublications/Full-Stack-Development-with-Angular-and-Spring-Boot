import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastBookComponent } from './fast-book.component';

describe('FastBookComponent', () => {
  let component: FastBookComponent;
  let fixture: ComponentFixture<FastBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastBookComponent]
    });
    fixture = TestBed.createComponent(FastBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
