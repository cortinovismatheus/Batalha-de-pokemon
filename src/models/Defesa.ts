import { PokemonType } from '../types';

interface Props {
  name: string;
  type: PokemonType;
  counter: number;
}

export class Defense {
  name: string;
  type: string;
  counter: number;

  constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.counter = data.counter;
  }
}
