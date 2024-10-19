import { Component, Input } from '@angular/core';
import { LISTES } from '../../mock/LISTES';
import { ChansonsComponent } from '../chansons/chansons.component';
import { Liste } from '../../interfaces/liste';
import { ListeSommaireComponent } from '../liste-sommaire/liste-sommaire.component';

@Component({
  selector: 'app-liste-complet',
  standalone: true,
  imports: [ChansonsComponent, ListeSommaireComponent],
  templateUrl: './liste-complet.component.html',
  styleUrl: './liste-complet.component.css',
})
export class ListeCompletComponent {
  @Input() liste = LISTES[2];
  chansons: any;
}
