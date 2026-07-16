import { Component } from '@angular/core';
import { AlojamientoHero } from '../../sections/alojamiento-hero/alojamiento-hero';
import { AlojamientoExperience } from '../../sections/alojamiento-experience/alojamiento-experience';
import { AlojamientoCta } from '../../sections/alojamiento-cta/alojamiento-cta';

@Component({
  selector: 'app-alojamiento',
  imports: [AlojamientoHero, AlojamientoExperience, AlojamientoCta],
  templateUrl: './alojamiento.html',
  styleUrl: './alojamiento.css',
})
export class Alojamiento {

}
