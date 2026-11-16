import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros-hero',
  imports: [TranslocoPipe],
  templateUrl: './nosotros-hero.html',
  styleUrl: './nosotros-hero.css',
})
export class NosotrosHero {}
