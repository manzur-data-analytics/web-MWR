import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-spa-hero',
  imports: [TranslocoPipe],
  templateUrl: './spa-hero.html',
  styleUrl: './spa-hero.css',
})
export class SpaHero {

}