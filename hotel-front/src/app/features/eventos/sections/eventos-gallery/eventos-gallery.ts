import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-gallery',
  imports: [TranslocoPipe],
  templateUrl: './eventos-gallery.html',
  styleUrl: './eventos-gallery.css',
})
export class EventosGallery implements OnInit, OnDestroy {

  ngOnInit() {
    this.interval = setInterval(() => {

      this.imagenActual.update(i =>
        i === this.imagenes.length - 1 ? 0 : i + 1
      );

    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  imagenActual = signal(0);
  private interval?: any;

  imagenes = [
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90',
      title: 'EVENTS.GALLERY.ITEMS.WEDDING.TITLE',
      category: 'EVENTS.GALLERY.ITEMS.WEDDING.CATEGORY'
    },
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=90',
      title: 'EVENTS.GALLERY.ITEMS.SOCIAL.TITLE',
      category: 'EVENTS.GALLERY.ITEMS.SOCIAL.CATEGORY'
    },
    {
      url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90',
      title: 'EVENTS.GALLERY.ITEMS.CORPORATE.TITLE',
      category: 'EVENTS.GALLERY.ITEMS.CORPORATE.CATEGORY'
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90',
      title: 'EVENTS.GALLERY.ITEMS.CELEBRATION.TITLE',
      category: 'EVENTS.GALLERY.ITEMS.CELEBRATION.CATEGORY'
    }
  ];

  seleccionar(index: number) {
    this.imagenActual.set(index);
  }
}
