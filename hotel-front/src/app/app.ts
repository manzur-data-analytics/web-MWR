import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingModal } from './features/home/booking-modal/booking-modal';
import { SmoothScrollService } from './core/services/smoth-scroll.service';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingModal, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-front');

  constructor(
    private smooth: SmoothScrollService
  ) { }


  ngOnInit() {

    this.smooth.start();

  }
}
