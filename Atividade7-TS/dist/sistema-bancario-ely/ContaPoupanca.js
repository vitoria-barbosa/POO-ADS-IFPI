"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Poupanca extends Conta {
    _taxaJuros;
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaJuros / 100;
        this.depositar(juros);
    }
}
