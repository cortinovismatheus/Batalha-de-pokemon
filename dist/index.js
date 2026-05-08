"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Atack_1 = require("./models/Atack");
const Pokemon_1 = require("./models/Pokemon");
const types_1 = require("./types");
const Thunderbolt = new Atack_1.Atack({
    name: 'Thunderbolt',
    type: types_1.PokemonType.ELECTRIC,
    damage: 50,
});
const Charizard = new Pokemon_1.Pokemon({
    name: 'Charizard',
    type: types_1.PokemonType.FIRE,
    atack: [Thunderbolt],
});
console.log(Charizard);
