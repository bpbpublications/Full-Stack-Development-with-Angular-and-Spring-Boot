import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalComponent } from './traditional.component';

describe('TraditionalComponent', () => {
  let component: TraditionalComponent;
  let fixture: ComponentFixture<TraditionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraditionalComponent]
    });
    fixture = TestBed.createComponent(TraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
