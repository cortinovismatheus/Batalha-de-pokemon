import { AtackName } from '../properties/atack';
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
  started: boolean = false;
  activePokemonAtack: boolean = false;

  constructor({ player }: Props) {
    this.player = player;
  }

  startValidation(): boolean {
    if (this.pokemons.length < 2) {
      console.error(
        `Jogador: ${this.player.name} tem ${this.pokemons.length} Pokémon(s).`,
      );
      throw new Error(
        'O jogador deve ter dois Pokémon para iniciar a batalha.',
      );
    }

    if (!this.activePokemon) {
      console.error(
        `Jogador: ${this.player.name} não tem um Pokémon ativo escolhido.`,
      );
      throw new Error(
        'O jogador deve escolher um Pokémon ativo para iniciar a batalha.',
      );
    }
    return true;
  }

  chosePokemon(name: PokemonName) {
    if (this.pokemons.length >= 2) {
      throw new Error(
        `O jogador ${this.player.name} já tem dois Pokémon escolhidos para a batalha.`,
      );
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
      throw new Error(
        `O Pokémon ${name} não foi escolhido para a batalha pelo jogador ${this.player.name}.`,
      );
    }
  }

  changePokemon() {
    if (this.started == false) {
      throw new Error(
        `A batalha ainda não começou. O jogador ${this.player.name} não pode mudar de Pokémon.`,
      );
    }

    const nextPokemon = this.pokemons.find(
      (pokemon) =>
        pokemon.name !== this.activePokemon?.name && pokemon.died === false,
    );
    if (nextPokemon) {
      this.activePokemon = nextPokemon;
      console.log(
        `O jogador ${this.player.name} mudou para o Pokémon ${this.activePokemon.name}!`,
      );
    }
  }

  forceChangePokemon() {
    const nextPokemon = this.pokemons.find(
      (pokemon) =>
        pokemon.name !== this.activePokemon?.name && pokemon.died === false,
    );

    if (nextPokemon) {
      this.activePokemon = nextPokemon;

      console.log(`${this.player.name} enviou ${nextPokemon.name}!`);
    }
  }
  start() {
    this.started = true;
  }

  atack(atackName: AtackName, enemy: BattlePlayerControll) {
    const attack = this.activePokemon?.atacks.find((a) => a.name === atackName);

    if (!attack) {
      throw new Error('Ataque não encontrado');
    }

    enemy.activePokemon?.receiveAttack(attack);
  }
}
