import { Battle } from './models/battle';
import { ash } from './players/ash';
import { misty } from './players/misty';

const battle = new Battle({ player1: misty, player2: ash });

battle.player1;
battle.start();
