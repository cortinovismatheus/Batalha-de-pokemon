import { DefenseName } from '../properties/defense';
import { PokemonType } from '../properties/pokemon-types';

const types: Record<DefenseName, PokemonType> = {
  [DefenseName.Growl]: PokemonType.NORMAL,
  [DefenseName.LeechSeed]: PokemonType.GRASS,
  [DefenseName.Projectile]: PokemonType.NORMAL,
  [DefenseName.PoisonPowder]: PokemonType.POISON,
  [DefenseName.SmokeScreen]: PokemonType.NORMAL,
  [DefenseName.FocusEnergy]: PokemonType.NORMAL,
  [DefenseName.FlameCharge]: PokemonType.FIRE,
  [DefenseName.Withdraw]: PokemonType.WATER,
  [DefenseName.RainDance]: PokemonType.WATER,
  [DefenseName.MirrorCoat]: PokemonType.PSYCHIC,
  [DefenseName.ThunderWave]: PokemonType.ELECTRIC,
  [DefenseName.DoubleTeam]: PokemonType.NORMAL,
  [DefenseName.Agility]: PokemonType.PSYCHIC,
};
