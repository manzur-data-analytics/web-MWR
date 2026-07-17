import { Component } from '@angular/core';
import { ExperienciasHero } from '../../sections/experiencias-hero/experiencias-hero';
import { ExperienciasSignature } from '../../sections/experiencias-signature/experiencias-signature';
import { ExperienciasCalendario } from '../../sections/experiencias-calendario/experiencias-calendario';
import { ExperienciasCta } from '../../sections/experiencias-cta/experiencias-cta';

@Component({
  selector: 'app-experiencias',
  imports: [ExperienciasHero, ExperienciasSignature, ExperienciasCalendario, ExperienciasCta],
  templateUrl: './experiencias.html',
  styleUrl: './experiencias.css',
})
export class Experiencias {

}
