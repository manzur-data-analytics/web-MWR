import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-experiencias',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './experiencias.html',
  styleUrl: './experiencias.css',
})
export class Experiencias {

}
