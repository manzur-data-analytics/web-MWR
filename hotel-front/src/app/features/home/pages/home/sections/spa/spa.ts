import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-spa',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './spa.html',
  styleUrl: './spa.css',
})
export class Spa {

}
