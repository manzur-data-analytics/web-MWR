import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-alojamiento-experience',
  imports: [TranslocoPipe],
  templateUrl: './alojamiento-experience.html',
  styleUrl: './alojamiento-experience.css',
})
export class AlojamientoExperience {
  readonly amenityNumbers = [1, 2, 3, 4, 5, 6];
}
