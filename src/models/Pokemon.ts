import { getPokemonTypeName } from '../definitions/pokemon-type-by-pokemon-name';
import { PokemonName } from '../properties/pokemon-name';
import { PokemonType } from '../properties/pokemon-types';
import { Atack } from './Atack';
import { Defense } from './Defense';

interface Props {
  name: PokemonName;
  type: PokemonType;
  atacks: Array<Atack>;
  defenses: Array<Defense>;
}

interface Create {
  name: PokemonName;
  atacks: Array<Atack>;
  defenses: Array<Defense>;
}

export class Pokemon {
  name: PokemonName;
  type: PokemonType;
  life: number = 200;
  atacks: Array<Atack>;
  defenses: Array<Defense>;
  died: boolean = false;

  protected constructor(data: Props) {
    this.name = data.name;
    this.type = data.type;
    this.atacks = data.atacks;
    this.defenses = data.defenses;
  }

  static create(data: Create) {
    const pokemonType = getPokemonTypeName(data.name);

    data.atacks.forEach((atack) => {
      if (pokemonType != atack.type) {
        throw new Error(
          `O ataque ${atack.name} é do tipo ${atack.type}, mas o pokemon é do tipo ${pokemonType}`,
        );
      }
    });

    return new Pokemon({
      name: data.name,
      type: pokemonType,
      atacks: data.atacks,
      defenses: data.defenses,
    });
  }

  receiveAttack(atack: Atack) {
    let damage = atack.damage;

    if (atack.type === this.defenses[0].type) {
      damage = Math.max(0, atack.damage - this.defenses[0].counter);

      console.log(
        `O ataque ${atack.name} foi parcialmente defendido! O dano original era ${atack.damage}, mas o Pokémon ${this.name} conseguiu reduzir para ${damage} usando ${this.defenses[0].name}.`,
      );
    } else {
      console.log(
        `O ataque ${atack.name} atingiu o Pokémon ${this.name} causando ${damage} de dano!`,
      );
    }

    this.life -= damage;

    console.log(`A vida restante do Pokémon ${this.name} é ${this.life}.`);

    if (this.life <= 0) {
      this.life = 0;
      this.die();
    }
  }

  die() {
    this.died = true;
  }
}
