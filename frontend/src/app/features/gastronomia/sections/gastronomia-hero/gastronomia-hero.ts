import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { MenuModalLink } from '../../../../shared/components/menu-modal/menu-modal';

@Component({
  selector: 'app-gastronomia-hero',
  imports: [TranslocoPipe, MenuModalLink],
  templateUrl: './gastronomia-hero.html',
  styleUrl: './gastronomia-hero.css',
})
export class GastronomiaHero {

}
