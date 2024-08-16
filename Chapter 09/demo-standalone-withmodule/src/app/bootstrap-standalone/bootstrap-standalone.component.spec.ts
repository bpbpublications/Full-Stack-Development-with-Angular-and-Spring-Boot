import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapStandaloneComponent } from './bootstrap-standalone.component';

describe('BootstrapStandaloneComponent', () => {
  let component: BootstrapStandaloneComponent;
  let fixture: ComponentFixture<BootstrapStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BootstrapStandaloneComponent]
    });
    fixture = TestBed.createComponent(BootstrapStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
