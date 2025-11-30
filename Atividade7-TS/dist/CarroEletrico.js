"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroEletrico = void 0;
const Carro_1 = require("./Carro");
class CarroEletrico extends Carro_1.Carro {
    _autonomiaBateria;
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
    set autonomiaBateria(v) {
        this._autonomiaBateria = v;
    }
}
exports.CarroEletrico = CarroEletrico;
