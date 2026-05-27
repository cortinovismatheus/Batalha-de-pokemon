import { Player } from '../Player';

export function startRules(player1: Player, player2: Player) {
  //validação de nomes
  if (player1.name === player2.name) {
    console.error(
      'Ambos os jogadores são iguais. Altere um dos jogadores para iniciar a batalha.',
    );
  }
}
