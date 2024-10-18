import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibliothequeComponent } from "./components/bibliotheque/bibliotheque.component";
import { ListeCompletComponent } from "./components/liste-complet/liste-complet.component";
import { ChansonsComponent } from "./components/chansons/chansons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliothequeComponent, ListeCompletComponent, ChansonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-musique-adrien';
}
