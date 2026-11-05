import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Navbar } from '../../../../layout/navbar/navbar';
import { TranslocoService } from '@jsverse/transloco';
import { Alojamiento } from './sections/alojamiento/alojamiento';
import { EventosBodas } from './sections/eventos-bodas/eventos-bodas';
import { Spa } from './sections/spa/spa';
import { Inicio } from './sections/inicio/inicio';
import { Gastronomia } from './sections/gastronomia/gastronomia';
import { Experiencias } from './sections/experiencias/experiencias';
import { Nosotros } from './sections/nosotros/nosotros';

@Component({
  selector: 'app-home',
  imports: [Inicio, Alojamiento, Gastronomia, EventosBodas, Spa, Experiencias, Nosotros],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements AfterViewInit {

  private transloco = inject(TranslocoService);

  private observeReveal(selector: string, threshold = 0.25) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }

  ngAfterViewInit(): void {
    this.observeReveal('.experience-card');
    this.observeReveal('.gastronomy-photo');
    this.observeReveal('.story-photo');
  }

  @ViewChild('galleryBackground')
  galleryBackground!: ElementRef<HTMLImageElement>;

  @HostListener('window:scroll')
  onScroll() {

    if (!this.galleryBackground) return;

    const rect =
      this.galleryBackground.nativeElement.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    // sólo cuando la sección está visible

    if (rect.bottom > 0 && rect.top < windowHeight) {

      const speed = 0.15;

      const offset = rect.top * speed;

      this.galleryBackground.nativeElement.style.transform =
        `translateY(${offset}px)`;

    }

  }


  //Traducir
  changeLanguage(lang: string) {
    this.transloco.setActiveLang(lang);

    localStorage.setItem(
      'language',
      lang
    );
  }

  currentLanguage() {
    return this.transloco.getActiveLang();
  }
}