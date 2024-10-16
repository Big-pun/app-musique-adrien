import { Component } from '@angular/core';
import { ListeSommaireComponent } from "../liste-sommaire/liste-sommaire.component";

@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [ListeSommaireComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css'
})
export class BibliothequeComponent {

  listes = [
    {titre: 'Podcasts', type: 'Liste de lecture', sousTitre: 'Les podcasts que j\'écoute'},
    {titre: 'Lucio Bukowsky', type: 'Artiste', sousTitre: 'Les chansons de Lucio Bukowsky que j\'écoute'},
    {titre: '2001', type: 'Album', sousTitre: 'Best album of the year'},
  ];
}
