import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibliothequeComponent } from "./components/bibliotheque/bibliotheque.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliothequeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-musique-adrien';
}
