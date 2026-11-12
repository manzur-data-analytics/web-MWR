import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class ExperienciasSignature {
  experiences: Experience[] = [
    {
      id: 1,
      number: '01',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=90',
      gallery: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=90',
      gallery: [
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=800&q=80',
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
  ];
}
