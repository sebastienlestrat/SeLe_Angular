import { Pokemon } from './../models/pokemon';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
@Input()  pokemonListInput : Pokemon[] = []; // decorate the property with @Input()
@Output() deletePokemonEvent = new EventEmitter<number>;
@Output() showdetailsEvent = new EventEmitter<Pokemon>;

showDetails(Pokemon : Pokemon) {
  this.showdetailsEvent.emit(Pokemon);
}


deletePokemon(id : number) {
  this.deletePokemonEvent.emit(id);
}
}
