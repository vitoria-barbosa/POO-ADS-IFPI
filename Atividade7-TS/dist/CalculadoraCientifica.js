"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCientifica = void 0;
const Calculadora_1 = require("./Calculadora");
class CalculadoraCientifica extends Calculadora_1.Calculadora {
    constructor(op1, op2) {
        super(op1, op2);
    }
    exponenciar() {
        Math.pow(this.operando1, this.operando2);
    }
}
exports.CalculadoraCientifica = CalculadoraCientifica;
