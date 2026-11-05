import { Component } from '@angular/core';
import { Nosotros2Hero } from '../../sections/nosotros-2-hero/nosotros-2-hero';
import { Nosotros2Historia } from '../../sections/nosotros-2-historia/nosotros-2-historia';

@Component({
  selector: 'app-nosotros-2',
  imports: [Nosotros2Hero, Nosotros2Historia],
  templateUrl: './nosotros-2.html',
  styleUrl: './nosotros-2.css',
})
export class Nosotros2 {

}
