import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { MenuModalLink } from '../../../../shared/components/menu-modal/menu-modal';

@Component({
  selector: 'app-gastronomia-cta',
  imports: [TranslocoPipe, MenuModalLink],
  templateUrl: './gastronomia-cta.html',
  styleUrl: './gastronomia-cta.css',
})
export class GastronomiaCta {

}
