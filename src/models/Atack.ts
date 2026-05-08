import { PokemonType } from '../types';

interface Props {
  name: string;
  type: PokemonType;
  damage: number;
}

export class Atack {
  name: string;
  type: string;
  damage: number;

  constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.damage = data.damage;
  }
}
