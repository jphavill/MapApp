import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatLngInputComponent } from './lat-lng-input.component';

describe('LatLngInputComponent', () => {
  let component: LatLngInputComponent;
  let fixture: ComponentFixture<LatLngInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatLngInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLngInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
