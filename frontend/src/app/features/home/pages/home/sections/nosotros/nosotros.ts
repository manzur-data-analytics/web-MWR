import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}
