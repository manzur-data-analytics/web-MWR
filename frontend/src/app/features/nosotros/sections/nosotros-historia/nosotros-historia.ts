import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros-historia',
  imports: [TranslocoPipe],
  templateUrl: './nosotros-historia.html',
  styleUrl: './nosotros-historia.css',
})
export class NosotrosHistoria {
  readonly paragraphs = [1, 2, 3, 4].map(number => 'ABOUT_PAGE.STORY.PARAGRAPH' + number);
  readonly photoIndex = signal(0);

  // Temporary resort images; replace with the family's archival photos when supplied.
  readonly photos = [
    { src: 'images/secciones/nosotros/galeria_pergola.jpg', altKey: 'ABOUT_PAGE.GALLERY.PERGOLA' },
    { src: 'images/home/alojamiento/primera-0113.jpg', altKey: 'ABOUT_PAGE.GALLERY.RESORT' },
    { src: 'images/home/eventos/primera-0055.jpg', altKey: 'ABOUT_PAGE.GALLERY.EVENTS' },
  ];

  movePhoto(direction: number): void {
    this.photoIndex.update(index => (index + direction + this.photos.length) % this.photos.length);
  }
}
