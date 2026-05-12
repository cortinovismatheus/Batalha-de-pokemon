import { Player } from './Player';

export class Battle {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }
}
