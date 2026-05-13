import { getPokemonTypeName } from '../definitions/pokemon-type-by-pokemon-name';
import { PokemonName } from '../properties/pokemon-name';
import { PokemonType } from '../properties/pokemon-types';
import { Atack } from './Atack';
import { Defense } from './Defense';

interface Props {
  name: PokemonName;
  type: PokemonType;
  atacks: Array<Atack>;
  defenses: Array<Defense>;
}

interface Create {
  name: PokemonName;
  atacks: Array<Atack>;
  defenses: Array<Defense>;
}

export class Pokemon {
  name: PokemonName;
  type: PokemonType;
  life: number = 200;
  atacks: Array<Atack>;
  defenses: Array<Defense>;

  protected constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.atacks = data.atacks;
    this.defenses = data.defenses;
  }

  static create(data: Create) {
    const pokemonType = getPokemonTypeName(data.name);

    data.atacks.forEach((atack) => {
      if (pokemonType != atack.type) {
        throw new Error(
          `O ataque ${atack.name} é do tipo ${atack.type}, mas o pokemon é do tipo ${pokemonType}`,
        );
      }
    });

    return new Pokemon({
      name: data.name,
      type: pokemonType,
      atacks: data.atacks,
      defenses: data.defenses,
    });
  }
}
