import { RouterLink } from '@angular/router';
import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-bodas',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './eventos-bodas.html',
  styleUrl: './eventos-bodas.css',
})
export class EventosBodas {

  imagenActual = signal(0);
  private interval?: any;

  imagenes = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80'

  ];

  ngOnInit() {
    this.interval = setInterval(() => {

      this.imagenActual.update(
        value => (value + 1) % this.imagenes.length
      );

    }, 5000);

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
