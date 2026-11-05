import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

export interface ExperienceFeature {
  icon: string;
  textKey: string;
}

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
  features: ExperienceFeature[];
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
      features: [
        { icon: '🍷', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_WINE' },
        { icon: '🧺', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_PICNIC' },
        { icon: '⏳', textKey: 'EXPERIENCES.SIGNATURE.PICNIC_DURATION' },
        { icon: '👥', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_GROUP_SMALL' },
      ],
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
      features: [
        { icon: '🍷', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_LABELS' },
        { icon: '🧀', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_GOURMET' },
        { icon: '👨‍🍳', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_SOMMELIER' },
        { icon: '⏳', textKey: 'EXPERIENCES.SIGNATURE.WINE_DURATION' },
      ],
    },
    {
      id: 3,
      number: '03',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=90',
      gallery: [
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      ],
      categoryKey: 'EXPERIENCES.SIGNATURE.BODEGA_CATEGORY',
      titleKey: 'EXPERIENCES.SIGNATURE.BODEGA_TITLE',
      descKey: 'EXPERIENCES.SIGNATURE.BODEGA_DESC',
      durationKey: 'EXPERIENCES.SIGNATURE.BODEGA_DURATION',
      availabilityKey: 'EXPERIENCES.SIGNATURE.BODEGA_AVAILABILITY',
      modeKey: 'EXPERIENCES.SIGNATURE.BODEGA_MODE',
      features: [
        { icon: '🚐', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_TRANSFER' },
        { icon: '🍇', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_WINERY' },
        { icon: '🍷', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_TASTING' },
        { icon: '👥', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_GROUP_REDUCED' },
      ],
    },
    {
      id: 4,
      number: '04',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90',
      gallery: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=80',
      ],
      categoryKey: 'EXPERIENCES.SIGNATURE.SUNSET_CATEGORY',
      titleKey: 'EXPERIENCES.SIGNATURE.SUNSET_TITLE',
      descKey: 'EXPERIENCES.SIGNATURE.SUNSET_DESC',
      durationKey: 'EXPERIENCES.SIGNATURE.SUNSET_DURATION',
      availabilityKey: 'EXPERIENCES.SIGNATURE.SUNSET_AVAILABILITY',
      modeKey: 'EXPERIENCES.SIGNATURE.SUNSET_MODE',
      features: [
        { icon: '🌅', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_SUNSET' },
        { icon: '🥂', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_SPARKLING' },
        { icon: '🎵', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_MUSIC' },
        { icon: '✨', textKey: 'EXPERIENCES.SIGNATURE.FEATURE_EXCLUSIVE' },
      ],
    },
  ];
}