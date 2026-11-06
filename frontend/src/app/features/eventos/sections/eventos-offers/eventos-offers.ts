import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface EventOffer {
  id: string;
  title: string;
  images: string[];
}

@Component({
  selector: 'app-eventos-offers',
  imports: [TranslocoPipe],
  templateUrl: './eventos-offers.html',
  styleUrl: './eventos-offers.css',
})
export class EventosOffers {
  readonly offers: EventOffer[] = [
    {
      id: 'weddings',
      title: 'EVENTS.OFFERS.WEDDINGS.TITLE',
      images: this.imagePaths('bodas', [
        'BYF02676.jpg', 'primera-0056.jpg', 'segunda-0059.jpg',
        'tercera-0221.jpg', 'cuarta-0287.jpg', 'quinta-0294.jpg',
      ]),
    },
    {
      id: 'social',
      title: 'EVENTS.OFFERS.SOCIAL.TITLE',
      images: this.imagePaths('eventos-sociales', [
        'primera-0171.jpg', 'segunda-0200.jpg', 'tercera-202.jpg',
        'quinta-0268.jpg', 'cuarta-0257.jpg', 'sexta-0280.jpg', 'septima-0323.jpg',
      ]),
    },
    {
      id: 'corporate',
      title: 'EVENTS.OFFERS.CORPORATE.TITLE',
      images: this.imagePaths('eventos-corporativos', [
        'segunda-0165.jpg', 'primera-0139.jpg', 'tercera-0168.jpg',
        'cuarta-0185.jpg', 'quinta-0212.jpg', 'sexta-0234.jpg',
        'septima-0331.jpg', 'octava-0338.jpg', 'novena-0344.jpg',
      ]),
    },
  ];

  readonly activeSlides = signal<Record<string, number>>({});

  activeIndex(offer: EventOffer): number {
    return this.activeSlides()[offer.id] ?? 0;
  }

  move(offer: EventOffer, direction: number): void {
    this.select(offer, (this.activeIndex(offer) + direction + offer.images.length) % offer.images.length);
  }

  select(offer: EventOffer, index: number): void {
    this.activeSlides.update(current => ({ ...current, [offer.id]: index }));
  }

  formatNumber(value: number): string {
    return String(value).padStart(2, '0');
  }

  private imagePaths(folder: string, files: string[]): string[] {
    return files.map(file => `secciones/eventos/offers/${folder}/${file}`);
  }
}
