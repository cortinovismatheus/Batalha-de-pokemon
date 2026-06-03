import { AtackName } from '../properties/atack';
import { startRules } from './battle/start-rules';
import { BattlePlayerControll } from './BattlePlayerControll';
import { Player } from './Player';
interface Props {
  player1: Player;
  player2: Player;
}

export class Battle {
  player1: BattlePlayerControll;
  player2: BattlePlayerControll;
  currentPlayer: BattlePlayerControll;
  started: boolean = false;

  constructor({ player1, player2 }: Props) {
    this.player1 = new BattlePlayerControll({ player: player1 });
    this.player2 = new BattlePlayerControll({ player: player2 });
    this.currentPlayer = Math.random() < 0.5 ? this.player1 : this.player2;
  }

  start() {
    const validationPlayer1 = this.player1.startValidation();
    const validationPlayer2 = this.player2.startValidation();

    if (!validationPlayer1 || !validationPlayer2) {
      console.error('A batalha não pode começar devido a falhas na validação.');
      return;
    }

    startRules(this.player1.player, this.player2.player);

    console.log(
      `A batalha entre ${this.player1.player.name} e ${this.player2.player.name} começou!`,
    );

    console.log(
      `O jogador ${this.player1.player.name} escolheu ${this.player1.activePokemon?.name} como Pokémon para iniciar a batalha!`,
    );

    console.log(
      `O jogador ${this.player2.player.name} escolheu ${this.player2.activePokemon?.name} como Pokémon para iniciar a batalha!`,
    );

    console.log(
      `O jogador ${this.currentPlayer.player.name} começa a batalha!`,
    );

    this.started = true;

    this.player1.start();
    this.player2.start();
  }
  attack(atackName: AtackName) {
    const attacker = this.currentPlayer;

    const defender = attacker === this.player1 ? this.player2 : this.player1;

    attacker.atack(atackName, defender);

    if (defender.activePokemon?.died == true) {
      console.log(
        `O Pokémon ${defender.activePokemon.name} do jogador ${defender.player.name} foi derrotado!`,
      );

      const hasPokemonsAlive = defender.pokemons.some(
        (pokemon) => pokemon.died === false,
      );

      if (!hasPokemonsAlive) {
        console.log(
          `O jogador ${defender.player.name} não tem mais Pokémon para lutar. O jogador ${attacker.player.name} venceu a batalha!`,
        );
        this.started = false;
        return;
      }

      defender.forceChangePokemon();
    }

    this.currentPlayer = defender;

    console.log(
      `Agora é a vez do jogador ${this.currentPlayer.player.name} atacar!`,
    );
  }
}
