"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCientifica = exports.Calculadora = void 0;
class Calculadora {
    _operando1;
    _operando2;
    constructor(op1, op2) {
        this._operando1 = op1;
        this._operando2 = op2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    get operando1() {
        return this._operando1;
    }
    set operando1(v) {
        this._operando1 = v;
    }
    get operando2() {
        return this._operando2;
    }
    set operando2(v) {
        this._operando2 = v;
    }
}
exports.Calculadora = Calculadora;
class CalculadoraCientifica extends Calculadora {
    constructor(op1, op2) {
        super(op1, op2);
    }
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
exports.CalculadoraCientifica = CalculadoraCientifica;
