import { Cliente } from "./Cliente";

export class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente | null;
    private _dataDeAbertura: Date;

    constructor(numero: string, saldo: number) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._cliente = null;
        this._dataDeAbertura = new Date();
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    get saldo(): number {
        return this._saldo
    }


    transferir(contaDestino: Conta, valor: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    get numero(): string {
        return this._numero;
    }

    get id(): number {
        return this._id;
    }

    set id(umId: number) {
        this._id = umId;
    }

    get cliente(): Cliente | null {
        return this._cliente;
    }

    set cliente(umCliente: Cliente | null) {
        this._cliente = umCliente;
    }
}
