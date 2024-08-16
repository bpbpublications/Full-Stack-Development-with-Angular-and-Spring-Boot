import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCtrComponent } from './signal-ctr.component';

describe('SignalCtrComponent', () => {
  let component: SignalCtrComponent;
  let fixture: ComponentFixture<SignalCtrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalCtrComponent]
    });
    fixture = TestBed.createComponent(SignalCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
