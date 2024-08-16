import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavIcecreamComponent } from './fav-icecream.component';

describe('FavIcecreamComponent', () => {
  let component: FavIcecreamComponent;
  let fixture: ComponentFixture<FavIcecreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavIcecreamComponent]
    });
    fixture = TestBed.createComponent(FavIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
