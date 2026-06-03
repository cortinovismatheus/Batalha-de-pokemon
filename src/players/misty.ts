import { Atack } from '../models/Atack';
import { Defense } from '../models/Defense';
import { Player } from '../models/Player';
import { Pokemon } from '../models/Pokemon';
import { AtackName } from '../properties/atack';
import { DefenseName } from '../properties/defense';
import { PokemonName } from '../properties/pokemon-name';
import { PokemonType } from '../properties/pokemon-types';

const squirtle = Pokemon.create({
  name: PokemonName.Squirtle,
  atacks: [Atack.create({ name: AtackName.WaterGun, damage: 40 })],
  defenses: [
    Defense.create({
      name: DefenseName.Agility,
      type: PokemonType.WATER,
      counter: 20,
    }),
  ],
});

const pikachu = Pokemon.create({
  name: PokemonName.Pikachu,
  atacks: [Atack.create({ name: AtackName.ThundesBolt, damage: 40 })],
  defenses: [
    Defense.create({
      name: DefenseName.Growl,
      type: PokemonType.WATER,
      counter: 20,
    }),
  ],
});

const charmander = Pokemon.create({
  name: PokemonName.Charmander,
  atacks: [Atack.create({ name: AtackName.Ember, damage: 40 })],
  defenses: [
    Defense.create({
      name: DefenseName.SmokeScreen,
      type: PokemonType.FIRE,
      counter: 20,
    }),
  ],
});

const bulbasaur = Pokemon.create({
  name: PokemonName.Bulbasaur,
  atacks: [Atack.create({ name: AtackName.VineWhip, damage: 40 })],
  defenses: [
    Defense.create({
      name: DefenseName.FocusEnergy,
      type: PokemonType.GRASS,
      counter: 20,
    }),
  ],
});

export const misty = new Player({
  name: 'Misty',
  pokemons: [pikachu, squirtle, charmander, bulbasaur],
});
