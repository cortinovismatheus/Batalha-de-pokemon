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

  constructor({ player1, player2 }: Props) {
    this.player1 = new BattlePlayerControll({ player: player1 });
    this.player2 = new BattlePlayerControll({ player: player2 });
  }

  start() {
    startRules(this.player1.player, this.player2.player);

    this.player1.startValidation();
    this.player2.startValidation();

    console.log(
      `A batalha entre ${this.player1.player.name} e ${this.player2.player.name} começou!`,
    );
  }
}
