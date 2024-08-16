import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUiComponent } from './simple-ui.component';

describe('SimpleUiComponent', () => {
  let component: SimpleUiComponent;
  let fixture: ComponentFixture<SimpleUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleUiComponent]
    });
    fixture = TestBed.createComponent(SimpleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
