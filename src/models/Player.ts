import { Pokemon } from './Pokemon';

interface Props {
  name: string;
  pokemons: Array<Pokemon>;
}

export class Player {
  name: string;
  pokemons: Array<Pokemon>;
  constructor(data: Props) {
    this.name = data.name;
    this.pokemons = data.pokemons;
  }
}
