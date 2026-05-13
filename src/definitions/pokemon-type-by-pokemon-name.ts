import { PokemonName } from '../properties/pokemon-name';
import { PokemonType } from '../properties/pokemon-types';

const types: Record<PokemonName, PokemonType> = {
  [PokemonName.Pikachu]: PokemonType.ELECTRIC,
  [PokemonName.Bulbasaur]: PokemonType.GRASS,
  [PokemonName.Charmander]: PokemonType.FIRE,
  [PokemonName.Squirtle]: PokemonType.WATER,
};

export function getPokemonTypeName(name: PokemonName): PokemonType {
  return types[name];
}
