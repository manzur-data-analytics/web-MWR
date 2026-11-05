import { Component } from '@angular/core';
import { NosotrosHero } from '../../sections/nosotros-hero/nosotros-hero';
import { NosotrosHistoria } from '../../sections/nosotros-historia/nosotros-historia';

@Component({
  selector: 'app-nosotros',
  imports: [NosotrosHero, NosotrosHistoria],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}
