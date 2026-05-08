import { PokemonType } from '../types';
import { Atack } from './Atack';
import { Defense } from './Defesa';

interface Props {
  name: string;
  type: PokemonType;
  atack: Array<Atack>;
  defense: Array<Defense>;
}

export class Pokemon {
  name: string;
  type: PokemonType;
  life: number = 200;
  atack: Array<Atack>;
  defense: Array<Defense>;

  constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.atack = data.atack;
    this.defense = data.defense;
  }
}
