import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros-hero',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './nosotros-hero.html',
  styleUrl: './nosotros-hero.css',
})
export class NosotrosHero {
  historyPhotos = [

    {
      year: '1920',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80'
    },

    {
      year: '1955',
      image:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80'
    },


    {
      year: '1985',
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80'
    },


    {
      year: 'Hoy',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    }

  ];
}
