import { Player } from './Player';
import { Pokemon } from './Pokemon';

interface Props {
  player: Player;
}

export class BattlePlayerControll {
  player: Player;
  pokemons: Pokemon[] = [];

  constructor({ player }: Props) {
    this.player = player;
  }

  startValidation() {
    if (this.pokemons.length > 2) {
      console.error(
        'O jogador deve ter no máximo dois Pokémon para iniciar a batalha.',
      );
      console.error(
        `Jogador: ${this.player.name} tem ${this.player.pokemons.length} Pokémon(s).`,
      );
    }

    if (this.pokemons.length < 2) {
      console.error('O jogador deve ter dois Pokémon para iniciar a batalha.');
      console.error(
        `Jogador: ${this.player.name} tem ${this.player.pokemons.length} Pokémon(s).`,
      );
    }
  }
}
