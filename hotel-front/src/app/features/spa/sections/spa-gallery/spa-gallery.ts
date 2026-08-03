import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-spa-gallery',
  imports: [TranslocoPipe],
  templateUrl: './spa-gallery.html',
  styleUrl: './spa-gallery.css',
})
export class SpaGallery implements AfterViewInit, OnDestroy {
  @ViewChild('galleryTrack') galleryTrack!: ElementRef<HTMLDivElement>;

  private animationFrameId: number | null = null;
  private isPaused = false;
  private speed = 1; // Velocidad del auto-scroll (ajustable: 0.5 a 2)

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    // Ejecutamos fuera de Angular Zone para maximizar rendimiento (60FPS)
    this.ngZone.runOutsideAngular(() => {
      this.startContinuousScroll();
    });
  }

  ngOnDestroy() {
    this.stopContinuousScroll();
  }

  private startContinuousScroll() {
    const animate = () => {
      if (this.galleryTrack && !this.isPaused) {
        const el = this.galleryTrack.nativeElement;

        // El punto medio es donde termina el primer set de tarjetas
        const halfScroll = el.scrollWidth / 2;

        // Si llegamos a la mitad (fin del 1er grupo), reseteamos la posición a 0 instantáneamente
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        } else {
          el.scrollLeft += this.speed;
        }
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  pauseAutoScroll() {
    this.isPaused = true;
  }

  resumeAutoScroll() {
    setTimeout(() => {
      this.isPaused = false;
    }, 1500);
  }

  private stopContinuousScroll() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
