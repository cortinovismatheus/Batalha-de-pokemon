"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(data) {
        this.life = 200;
        this.name = data.name;
        this.type = data.type;
        this.atack = data.atack;
    }
}
exports.Pokemon = Pokemon;
