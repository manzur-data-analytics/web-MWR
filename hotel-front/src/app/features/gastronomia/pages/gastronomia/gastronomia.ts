import { Component } from '@angular/core';
import { GastronomiaHero } from '../../sections/gastronomia-hero/gastronomia-hero';
import { GastronomiaExperience } from '../../sections/gastronomia-experience/gastronomia-experience';
import { GastronomiaCta } from '../../sections/gastronomia-cta/gastronomia-cta';

@Component({
  selector: 'app-gastronomia',
  imports: [GastronomiaHero, GastronomiaExperience, GastronomiaCta],
  templateUrl: './gastronomia.html',
  styleUrl: './gastronomia.css',
})
export class Gastronomia {

}
