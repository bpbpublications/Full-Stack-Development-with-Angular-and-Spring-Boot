import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle.component';
describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleComponent]
    });
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
    
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });  
  it('#onClick() should toggle #isOn', () => {
     // const comp = new ToggleComponent();
      expect(component.isOn).withContext('off at first').toBe(false);
      component.onClick();
      expect(component.isOn).withContext('on after click').toBe(true);
      component.onClick();
      expect(component.isOn).withContext('off after second click').toBe(false);
    });
  
});
