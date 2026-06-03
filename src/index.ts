import { Battle } from './models/battle';
import { ash } from './players/ash';
import { misty } from './players/misty';
import { AtackName } from './properties/atack';
import { PokemonName } from './properties/pokemon-name';

const battle = new Battle({ player1: misty, player2: ash });

battle.player1;
battle.player2;

battle.player1.chosePokemon(PokemonName.Pikachu);
battle.player1.chosePokemon(PokemonName.Squirtle);
battle.player1.choseStartPokemon(PokemonName.Pikachu);

battle.player2.chosePokemon(PokemonName.Squirtle);
battle.player2.chosePokemon(PokemonName.Pikachu);
battle.player2.choseStartPokemon(PokemonName.Squirtle);

battle.start();

battle.attack(AtackName.ThundesBolt);
battle.attack(AtackName.ThundesBolt);

battle.attack(AtackName.WaterGun);
