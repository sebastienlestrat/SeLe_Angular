import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-favoris',
  templateUrl: './pokemon-favoris.component.html',
  styleUrls: ['./pokemon-favoris.component.scss']
})
export class PokemonFavorisComponent {

  @Input() pokemonFavoriteListInput : Pokemon[] = [];
}
