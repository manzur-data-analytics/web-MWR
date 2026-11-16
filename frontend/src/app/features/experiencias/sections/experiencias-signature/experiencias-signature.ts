import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

export interface Experience {
  id: number;
  number: string;
  image: string;
  gallery: string[];
  categoryKey: string;
  titleKey: string;
  descKey: string;
  durationKey: string;
  availabilityKey: string;
  modeKey: string;
  noteKey?: string;
  routeKeys?: string[];
}

@Component({
  selector: 'app-experiencias-signature',
  standalone: true,
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './experiencias-signature.html',
  styleUrl: './experiencias-signature.css',
})
export class ExperienciasSignature implements AfterViewInit {
  @ViewChildren('carreel') private carousels!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    this.carousels.forEach(({ nativeElement }) => {
      nativeElement.scrollTo({ left: nativeElement.clientWidth, behavior: 'instant' });
    });
  }

  normalizeGallery(carousel: HTMLElement): void {
    const width = carousel.clientWidth;
    const count = carousel.children.length - 2;
    if (count < 2 || width === 0) return;

    const index = Math.round(carousel.scrollLeft / width);
    if (index === 0 || index === count + 1) {
      carousel.scrollTo({
        left: (index === 0 ? count : 1) * width,
        behavior: 'instant',
      });
    }
  }

  moveGallery(carousel: HTMLElement, direction: -1 | 1): void {
    const count = carousel.children.length - 2;
    const width = carousel.clientWidth;
    if (count < 2 || width === 0) return;

    // Reposition endpoint copies before moving, even if scrollend has not fired.
    this.normalizeGallery(carousel);
    const currentIndex = Math.round(carousel.scrollLeft / width);
    const nextIndex = Math.max(0, Math.min(count + 1, currentIndex + direction));
    carousel.scrollTo({ left: nextIndex * width, behavior: 'smooth' });
  }

  experiences: (Experience & { slides: string[] })[] = [
    {
      id: 1,
      number: '01',
      image: 'images/secciones/experiencias/signature/picnic/picnic-canasta-jardines.jpg',
      gallery: [
        'images/secciones/experiencias/signature/picnic/picnic-canasta-jardines.jpg',
        'images/secciones/experiencias/signature/picnic/picnic-tabla-fiambres-quesos.jpg',
        'images/secciones/experiencias/signature/picnic/picnic-criolla-maimara.jpeg',
        'images/secciones/experiencias/signature/picnic/picnic-copa-frente-a-los-cerros.jpg',
      ],
      categoryKey: 'EXPERIENCES.SIGNATURE.PICNIC_CATEGORY',
      titleKey: 'EXPERIENCES.SIGNATURE.PICNIC_TITLE',
      descKey: 'EXPERIENCES.SIGNATURE.PICNIC_DESC',
      durationKey: 'EXPERIENCES.SIGNATURE.PICNIC_DURATION',
      availabilityKey: 'EXPERIENCES.SIGNATURE.PICNIC_AVAILABILITY',
      modeKey: 'EXPERIENCES.SIGNATURE.PICNIC_MODE',
      noteKey: 'EXPERIENCES.SIGNATURE.PICNIC_NOTE',
    },
    {
      id: 2,
      number: '02',
      image: 'images/secciones/experiencias/signature/wine-trip/wine-trip-presentacion-vino.jpg',
      gallery: [
        'images/secciones/experiencias/signature/wine-trip/wine-trip-presentacion-vino.jpg',
        'images/secciones/experiencias/signature/wine-trip/wine-trip-servicio-copa.jpg',
        'images/secciones/experiencias/signature/wine-trip/wine-trip-criolla-hielera.jpg',
        'images/secciones/experiencias/signature/wine-trip/wine-trip-botellas-criolla.jpg',
        'images/secciones/experiencias/signature/wine-trip/wine-trip-seleccion-vinos.jpg',
      ],
      categoryKey: 'EXPERIENCES.SIGNATURE.WINE_CATEGORY',
      titleKey: 'EXPERIENCES.SIGNATURE.WINE_TITLE',
      descKey: 'EXPERIENCES.SIGNATURE.WINE_DESC',
      durationKey: 'EXPERIENCES.SIGNATURE.WINE_DURATION',
      availabilityKey: 'EXPERIENCES.SIGNATURE.WINE_AVAILABILITY',
      modeKey: 'EXPERIENCES.SIGNATURE.WINE_MODE',
      routeKeys: [
        'EXPERIENCES.SIGNATURE.WINE_ROUTE_PUEBLOS',
        'EXPERIENCES.SIGNATURE.WINE_ROUTE_OLLANTAY',
        'EXPERIENCES.SIGNATURE.WINE_ROUTE_GRAND',
      ],
    },
  ].map((experience) => ({
    ...experience,
    slides: [
      experience.gallery[experience.gallery.length - 1],
      ...experience.gallery,
      experience.gallery[0],
    ],
  }));
}
