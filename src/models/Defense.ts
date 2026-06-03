import { DefenseName } from '../properties/defense';
import { PokemonType } from '../properties/pokemon-types';

interface Props {
  name: string;
  type: PokemonType;
  counter: number;
}

interface Create {
  name: DefenseName;
  type: PokemonType;
  counter: number;
}

export class Defense {
  name: string;
  type: PokemonType;
  counter: number;

  constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.counter = data.counter;
  }

  static create(data: Create) {
    return new Defense({
      name: data.name,
      type: data.type,
      counter: data.counter,
    });
  }
}
