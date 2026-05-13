import { AtackName } from '../properties/atack';
import { PokemonType } from '../properties/pokemon-types';

const types: Record<AtackName, PokemonType> = {
  [AtackName.VineWhip]: PokemonType.GRASS,
  [AtackName.RazorLeaf]: PokemonType.GRASS,
  [AtackName.Tackle]: PokemonType.NORMAL,
  [AtackName.SeedBomb]: PokemonType.GRASS,
  [AtackName.Ember]: PokemonType.FIRE,
  [AtackName.Flamethrower]: PokemonType.FIRE,
  [AtackName.Scratch]: PokemonType.NORMAL,
  [AtackName.FIreFang]: PokemonType.FIRE,
  [AtackName.WaterGun]: PokemonType.WATER,
  [AtackName.Bubble]: PokemonType.WATER,
  [AtackName.AquaTail]: PokemonType.WATER,
  [AtackName.ThundesBolt]: PokemonType.ELECTRIC,
  [AtackName.DubleTeam]: PokemonType.NORMAL,
  [AtackName.Projectile]: PokemonType.NORMAL,
  [AtackName.Agility]: PokemonType.NORMAL,
};

export function getPokemonType(name: AtackName): PokemonType {
  return types[name];
}
