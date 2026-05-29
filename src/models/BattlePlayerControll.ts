import { PokemonName } from '../properties/pokemon-name';
import { Player } from './Player';
import { Pokemon } from './Pokemon';

interface Props {
  player: Player;
}

export class BattlePlayerControll {
  player: Player;
  pokemons: Pokemon[] = [];
  activePokemon: Pokemon | null = null;

  constructor({ player }: Props) {
    this.player = player;
  }

  startValidation(): boolean {
    if (this.pokemons.length < 2) {
      console.error('O jogador deve ter dois Pokémon para iniciar a batalha.');
      console.error(
        `Jogador: ${this.player.name} tem ${this.pokemons.length} Pokémon(s).`,
      );

      return false;
    }

    if (!this.activePokemon) {
      console.error(
        'O jogador deve escolher um Pokémon ativo para iniciar a batalha.',
      );
      console.error(
        `Jogador: ${this.player.name} não tem um Pokémon ativo escolhido.`,
      );

      return false;
    }
    return true;
  }

  chosePokemon(name: PokemonName) {
    if (this.pokemons.length >= 2) {
      console.error(
        `O jogador ${this.player.name} já tem dois Pokémon escolhidos para a batalha.`,
      );
      return;
    }

    this.player.pokemons.forEach((pokemon) => {
      if (pokemon.name === name) {
        this.pokemons.push(pokemon);
      }
    });
  }

  choseStartPokemon(name: PokemonName) {
    if (this.activePokemon) {
      throw new Error(
        `O jogador ${this.player.name} já tem um Pokémon ativo escolhido para a batalha.`,
      ); // Lança um erro para interromper a execução
    }

    const pokemon = this.pokemons.find((pokemon) => pokemon.name === name);
    if (pokemon) {
      this.activePokemon = pokemon;
    } else {
      console.error(
        `O Pokémon ${name} não foi escolhido para a batalha pelo jogador ${this.player.name}.`,
      );
    }
  }

  changePokemon() {
    const nextPokemon = this.pokemons.find(
      (pokemon) => pokemon !== this.activePokemon && pokemon.life > 0,
    );
    if (nextPokemon) {
      this.activePokemon = nextPokemon;
      console.log(
        `O jogador ${this.player.name} mudou para o Pokémon ${this.activePokemon.name}!`,
      );
    }
  }
}
