"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = void 0;
const Conta_1 = require("./Conta");
class ContaImposto extends Conta_1.Conta {
    _taxaDesconto;
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    //reescrevi o método modificando seu comportamento 
    sacar(valor) {
        let desconto = this.saldo * this._taxaDesconto / 100;
        let total = valor + desconto;
        super.sacar(total);
    }
}
exports.ContaImposto = ContaImposto;
