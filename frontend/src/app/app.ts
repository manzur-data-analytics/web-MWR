import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BookingModal } from './shared/components/booking-modal/booking-modal';
import { SmoothScrollService } from './core/services/smoth-scroll.service';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs';
import { WhatsappButton } from './shared/components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingModal, Navbar, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  constructor(
    private smooth: SmoothScrollService,
    private router: Router
  ) { }

  ngOnInit() {

    this.smooth.start();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.smooth.scrollToTop();

      });

  }
}
