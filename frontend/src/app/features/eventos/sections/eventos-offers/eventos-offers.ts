import { Component, HostListener, signal } from '@angular/core';
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
        'BYF02676.webp', 'primera-0056.webp', 'segunda-0059.webp',
        'tercera-0221.webp', 'cuarta-0287.webp', 'quinta-0294.webp',
      ]),
    },
    {
      id: 'social',
      title: 'EVENTS.OFFERS.SOCIAL.TITLE',
      images: this.imagePaths('eventos-sociales', [
        'primera-0171.webp', 'segunda-0200.webp', 'tercera-202.webp',
        'quinta-0268.webp', 'cuarta-0257.webp', 'sexta-0280.webp', 'septima-0323.webp',
      ]),
    },
    {
      id: 'corporate',
      title: 'EVENTS.OFFERS.CORPORATE.TITLE',
      images: this.imagePaths('eventos-corporativos', [
        'segunda-0165.webp', 'primera-0139.webp', 'tercera-0168.webp',
        'cuarta-0185.webp', 'quinta-0212.webp', 'sexta-0254.webp',
        'septima-0331.webp', 'octava-0338.webp', 'novena-0344.webp',
      ]),
    },
  ];

  readonly expandedOffer = signal<EventOffer | null>(null);

  toggleExpansion(offer: EventOffer): void {
    if (!window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches) return;
    this.expandedOffer.update(current => current?.id === offer.id ? null : offer);
  }

  @HostListener('document:keydown.escape')
  collapse(): void {
    this.expandedOffer.set(null);
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    if (event.target instanceof Element && !event.target.closest('.offer-card')) this.collapse();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches) this.collapse();
  }

  readonly activeSlides = signal<Record<string, number>>({});
  readonly pendingSlides = signal<Record<string, number>>({});
  private readonly imageCache = new Map<string, Promise<void>>();

  activeIndex(offer: EventOffer): number {
    return this.activeSlides()[offer.id] ?? 0;
  }

  move(offer: EventOffer, direction: number): void {
    const current = this.pendingSlides()[offer.id] ?? this.activeIndex(offer);
    void this.select(offer, (current + direction + offer.images.length) % offer.images.length);
  }

  async select(offer: EventOffer, index: number): Promise<void> {
    this.pendingSlides.update(current => ({ ...current, [offer.id]: index }));
    try {
      await this.loadImage(offer.images[index]);
      // A slower request must not replace a more recent selection.
      if (this.pendingSlides()[offer.id] !== index) return;
      this.activeSlides.update(current => ({ ...current, [offer.id]: index }));
      this.preloadNeighbors(offer);
    } catch {
      // Keep the current photograph visible if the next one cannot load.
    } finally {
      if (this.pendingSlides()[offer.id] === index) {
        this.pendingSlides.update(current => {
          const next = { ...current };
          delete next[offer.id];
          return next;
        });
      }
    }
  }

  preloadNeighbors(offer: EventOffer): void {
    const index = this.activeIndex(offer);
    for (const offset of [-1, 1]) {
      const neighbor = (index + offset + offer.images.length) % offer.images.length;
      void this.loadImage(offer.images[neighbor]).catch(() => {});
    }
  }

  private loadImage(src: string): Promise<void> {
    const cached = this.imageCache.get(src);
    if (cached) return cached;
    const ready = new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        image.decode().then(resolve, resolve);
      };
      image.onerror = () => reject(new Error(`Unable to load ${src}`));
      image.src = src;
    });
    this.imageCache.set(src, ready);
    void ready.catch(() => this.imageCache.delete(src));
    return ready;
  }

  formatNumber(value: number): string {
    return String(value).padStart(2, '0');
  }

  private imagePaths(folder: string, files: string[]): string[] {
    return files.map(file => `images/secciones/eventos/galeria/${folder}/${file}`);
  }
}
