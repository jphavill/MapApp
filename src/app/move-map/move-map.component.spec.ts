import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveMapComponent } from './move-map.component';

describe('MoveMapComponent', () => {
  let component: MoveMapComponent;
  let fixture: ComponentFixture<MoveMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
