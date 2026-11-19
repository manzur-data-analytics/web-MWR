import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { MenuModalLink } from '../../../../../../shared/components/menu-modal/menu-modal';

@Component({
  selector: 'app-gastronomia',
  imports: [TranslocoPipe, RouterLink, MenuModalLink],
  templateUrl: './gastronomia.html',
  styleUrl: './gastronomia.css',
})
export class Gastronomia {

}
