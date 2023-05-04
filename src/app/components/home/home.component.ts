import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokemon: Pokemon[] = [
    {id: 1, name: 'Pikachu', type: 'Eclair', shortDescription: "Pikachu est un petit Pokémon joufflu qui ressemble à un rongeur, au corps recouvert d'un pelage jaune avec deux bandes horizontales brunes dans le dos", longDescription: ''},
    {id: 2, name: 'Bulbizar', type: 'Plante', shortDescription: "Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour", longDescription: ''},
    {id: 3, name: 'Carapuce', type: 'Eau', shortDescription: "Quand il rentre son cou dans sa carapace, il peut projeter de l'eau à haute pression", longDescription: ''}
  ];

  selectedPokemon? : Pokemon ;
  favoritePokemon? : Pokemon ;
  
  removePokemon(id : number) {
    this.pokemon = this.pokemon.filter(pokemon => pokemon.id !== id)
  }

  onSelectedPokemon(pokemon : Pokemon) {
    this.selectedPokemon = pokemon ;
  }

  onFavoritePokemon(pokemon : Pokemon) {
    this.favoritePokemon = pokemon;
  }
}
