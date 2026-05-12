import { Atack } from './models/Atack';
import { Defense } from './models/Defesa';
import { Player } from './models/Player';
import { Pokemon } from './models/Pokemon';
import { PokemonType } from './types';

const Thunderbolt = new Atack({
  name: 'Thunderbolt',
  type: PokemonType.ELECTRIC,
  damage: 50,
});

const Defesa = new Defense({
  name: 'defesa',
  type: PokemonType.WATER,
  counter: 3,
});

const Charizard = new Pokemon({
  name: 'Charizard',
  type: PokemonType.FIRE,
  atack: [Thunderbolt],
  defense: [Defesa],
});

const Pikachu = new Pokemon({
  name: 'Pikachu',
  type: PokemonType.ELECTRIC,
  atack: [Thunderbolt],
  defense: [Defesa],
});

const player1 = new Player({
  name: 'Ash',
  pokemons: [Pikachu, Charizard],
});

const player2 = new Player({
  name: 'Gary',
  pokemons: [Charizard, Pikachu],
});

console.log(player1);
console.log(player2);
