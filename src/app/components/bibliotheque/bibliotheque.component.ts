import { Component } from '@angular/core';
import { ListeSommaireComponent } from "../liste-sommaire/liste-sommaire.component";
import { LISTES } from '../../mock/LISTES';


@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [ListeSommaireComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css'
})
export class BibliothequeComponent {
  listes = LISTES;

}
