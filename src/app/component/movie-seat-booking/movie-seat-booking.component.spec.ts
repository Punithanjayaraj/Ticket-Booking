import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSeatBookingComponent } from './movie-seat-booking.component';

describe('MovieSeatBookingComponent', () => {
  let component: MovieSeatBookingComponent;
  let fixture: ComponentFixture<MovieSeatBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSeatBookingComponent]
    });
    fixture = TestBed.createComponent(MovieSeatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
