import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulecompComponent } from './modulecomp.component';

describe('ModulecompComponent', () => {
  let component: ModulecompComponent;
  let fixture: ComponentFixture<ModulecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulecompComponent]
    });
    fixture = TestBed.createComponent(ModulecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
