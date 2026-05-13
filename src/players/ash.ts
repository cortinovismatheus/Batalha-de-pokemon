import { Atack } from '../models/Atack';
import { Defense } from '../models/Defense';
import { Pokemon } from '../models/Pokemon';
import { AtackName } from '../properties/atack';
import { DefenseName } from '../properties/defense';
import { PokemonName } from '../properties/pokemon-name';

const pikachu = Pokemon.create({
  name: PokemonName.Pikachu,
  atacks: [Atack.create({ name: AtackName.ThundesBolt, damage: 40 })],
  defenses: [Defense.create({ name: DefenseName.Growl, counter: 20 })],
});

export const ash = {
  name: 'Ash',
  pokemons: [pikachu],
};
