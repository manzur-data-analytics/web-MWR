import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros-2-historia',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './nosotros-2-historia.html',
  styleUrl: './nosotros-2-historia.css',
})

export class Nosotros2Historia implements OnInit, OnDestroy {
  // Hero Carousel: Imágenes HD de Cerros de Maimará, Viñedos de Altura y Arquitectura Luxe
  heroImages: string[] = [
    'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1920&q=80', // Paleta del Pintor Maimará
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920&q=80', // Viñedo soleado en la montaña
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80', // Vides de altura y tierra andina
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80'  // Hotel de lujo / Cava cálida
  ];

  currentHeroIndex = 0;
  private intervalId: any;

  // Galería "Pared de Cuadros Viva" (Especial Maimará y Legado Familiar)
  // Galería "Pared de Cuadros Viva" (Imágenes renovadas: Cerros, Viñedos y Familia)
  galleryImages = {
    // Cerros imponentes estilo Quebrada
    maimaraMain: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',

    // Texturas de montaña y tierra andina
    maimaraSecondary: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',

    // Viñedo de altura al pie de la montaña
    terroirVineyard: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',

    // Interior de lujo rústico con madera y calidez
    interiorLuxury: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',

    // Atardecer dorado en el campo
    familyRoots: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',

    // Momentos de reunión/familia caminando entre viñedos al atardecer
    familyVineyard: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80'
  };

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 5500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
