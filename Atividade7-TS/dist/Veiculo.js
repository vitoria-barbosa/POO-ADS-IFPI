"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroEletrico = exports.Carro = exports.Veiculo = void 0;
class Veiculo {
    _placa;
    _ano;
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    andar() {
    }
    get placa() {
        return this._placa;
    }
    set placa(placa) {
        this._placa = placa;
    }
    get ano() {
        return this._ano;
    }
    set ano(ano) {
        this._ano = ano;
    }
}
exports.Veiculo = Veiculo;
class Carro extends Veiculo {
    _modelo;
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
}
exports.Carro = Carro;
class CarroEletrico extends Carro {
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
