import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateSorterComponent } from './coordinate-sorter.component';

describe('CoordinateSorterComponent', () => {
  let component: CoordinateSorterComponent;
  let fixture: ComponentFixture<CoordinateSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateSorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
