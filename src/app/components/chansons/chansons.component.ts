import { Component, Input } from '@angular/core';
import { CHANSONS } from '../../mock/CHANSONS';

@Component({
  selector: 'app-chansons',
  standalone: true,
  imports: [],
  templateUrl: './chansons.component.html',
  styleUrl: './chansons.component.css',
})
export class ChansonsComponent {
  chansons = CHANSONS;
  @Input() chanson: any;
}
