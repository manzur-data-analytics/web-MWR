import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-spa',
  imports: [TranslocoPipe],
  templateUrl: './spa.html',
  styleUrl: './spa.css',
})
export class Spa {

}
