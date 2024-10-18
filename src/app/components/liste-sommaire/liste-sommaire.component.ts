import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-liste-sommaire',
  standalone: true,
  imports: [],
  templateUrl: './liste-sommaire.component.html',
  styleUrl: './liste-sommaire.component.css'
})
export class ListeSommaireComponent {
  @Input() titre: string='';
  @Input() type: string='';
  @Input() sousTitre?: string='';
}
