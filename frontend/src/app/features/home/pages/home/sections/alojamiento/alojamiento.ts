import { RouterLink } from '@angular/router';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-alojamiento',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './alojamiento.html',
  styleUrl: './alojamiento.css',
})
export class Alojamiento implements OnInit {

  ngOnInit() {
    setInterval(() => {
      this.imagenActual.update(v => (v + 1) % this.imagenes.length);
    }, 4000);
  }

  imagenActual = signal(0);

  imagenes = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80'
  ];
}