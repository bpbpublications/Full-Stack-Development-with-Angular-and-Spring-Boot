import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleEffectComponent } from './toggle-effect.component';

describe('ToggleEffectComponent', () => {
  let component: ToggleEffectComponent;
  let fixture: ComponentFixture<ToggleEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleEffectComponent]
    });
    fixture = TestBed.createComponent(ToggleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
