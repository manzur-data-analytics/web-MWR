import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SmoothScrollService } from '../../../../core/services/smoth-scroll.service';

@Component({
  selector: 'app-eventos-hero',
  imports: [TranslocoPipe],
  templateUrl: './eventos-hero.html',
  styleUrl: './eventos-hero.css',
})
export class EventosHero {
  constructor(public scroll: SmoothScrollService) {}
}
