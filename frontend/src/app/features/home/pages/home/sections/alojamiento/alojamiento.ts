import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-alojamiento',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './alojamiento.html',
  styleUrl: './alojamiento.css',
})
export class Alojamiento {}
