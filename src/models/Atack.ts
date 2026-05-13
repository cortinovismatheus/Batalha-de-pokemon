import { getPokemonType } from '../definitions/pokemon-type-by-atack';
import { AtackName } from '../properties/atack';
import { PokemonType } from '../properties/pokemon-types';

interface Props {
  name: AtackName;
  type: PokemonType;
  damage: number;
}

interface Create {
  name: AtackName;
  damage: number;
}

export class Atack {
  name: AtackName;
  type: PokemonType;
  damage: number;

  constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.damage = data.damage;
  }

  static create(data: Create) {
    return new Atack({
      name: data.name,
      type: getPokemonType(data.name),
      damage: data.damage,
    });
  }
}
