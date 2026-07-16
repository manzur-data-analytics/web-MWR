import { Component } from '@angular/core';
import { SpaHero } from '../../sections/spa-hero/spa-hero';
import { SpaGallery } from '../../sections/spa-gallery/spa-gallery';
import { SpaTreatments } from '../../sections/spa-treatments/spa-treatments';
import { Navbar } from '../../../../layout/navbar/navbar';

@Component({
  selector: 'app-spa',
  imports: [SpaHero, SpaGallery, SpaTreatments, Navbar],
  templateUrl: './spa.html',
  styleUrl: './spa.css',
})
export class Spa {

}
