import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-gastronomia',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './gastronomia.html',
  styleUrl: './gastronomia.css',
})
export class Gastronomia {

}
