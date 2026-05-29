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
  }
}
