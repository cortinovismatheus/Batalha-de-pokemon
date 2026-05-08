import { Atack } from './models/Atack';
import { Defense } from './models/Defesa';
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

console.log(Charizard);
