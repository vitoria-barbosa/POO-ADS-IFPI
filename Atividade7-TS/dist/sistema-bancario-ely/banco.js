"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const Cliente_1 = require("./Cliente");
const Conta_1 = require("./Conta");
const Poupanca_1 = require("./Poupanca");
class Banco {
    _contas;
    _clientes;
    _idClienteAtual;
    _idContaAtual;
    constructor() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual = 1;
        this._idContaAtual = 1;
    }
    inserirConta(conta) {
        conta.id = this._idContaAtual++;
        if (!this.consultarContaPeloNumero(conta.numero)) { // insere a conta no array de contas se não tiver nenhuma com aquele número.
            this._contas.push(conta);
        }
    }
    inserirCliente(cliente) {
        cliente.id = this._idClienteAtual++;
        if (!this.consultarClientePeloCPF(cliente.cpf)) { // insere o cliente no array de clientes se não tiver nenhum cliente com o mesmo cpf.
            this._clientes.push(cliente);
        }
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarContaPeloNumero(numeroConta);
        let clienteProcurado = this.consultarClientePeloCPF(cpfCliente);
        if (contaProcurada && clienteProcurado && this.naoEstaoAssociados(contaProcurada, clienteProcurado)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }
    sacar(numero, valor) {
        let contaProcurada = this.consultarContaPeloNumero(numero);
        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }
    depositar(numero, valor) {
        let contaProcurada = this.consultarContaPeloNumero(numero);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.consultarContaPeloNumero(numeroOrigem);
        let contaDestino = this.consultarContaPeloNumero(numeroDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    renderJuros(numero) {
        let contaProcurada = this.consultarContaPeloNumero(numero);
        if (contaProcurada) {
            if (contaProcurada instanceof Poupanca_1.Poupanca) {
                contaProcurada.renderJuros();
                /* o cast é desnecessário após o if conforme abaixo.
                Cortesia do typescript
                contaProcurada.renderJuros();
                */
            }
        }
    }
    realizarOrdemBancaria(numeroContaOrigem, numerosContasDestino, valor) {
        let contaOrigem = this.consultarContaPeloNumero(numeroContaOrigem);
        if (contaOrigem) {
            for (let numeroDestino of numerosContasDestino) {
                let contaDestino = this.consultarContaPeloNumero(numeroDestino);
                if (contaDestino) {
                    contaOrigem.sacar(valor);
                    contaDestino.depositar(valor);
                }
            }
        }
    }
    excluirConta(numero) {
        let indiceProcurado = this.indiceDaConta(numero);
        if (indiceProcurado >= 0) {
            this._contas.splice(indiceProcurado, 1);
        }
    }
    excluirCliente(cpf) {
        let cliente = this.consultarClientePeloCPF(cpf);
        if (cliente) {
            let indiceCliente = this.indiceDoCliente(cpf);
            this._clientes.splice(indiceCliente, 1);
            for (let conta of cliente.contas) {
                conta.cliente = null;
            }
        }
    }
    alterarConta(conta) {
        let contaProcurada = this.consultarContaPeloNumero(conta.numero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    }
    listarContasSemCliente() {
        let contas = [];
        for (let conta of this._contas) {
            if (conta.cliente == null) {
                contas.push(conta);
            }
        }
        return contas;
    }
    listarContasCliente(cpf) {
        let clienteProcurado = this.consultarClientePeloCPF(cpf);
        let contas = [];
        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }
    totalizarSaldoCliente(cpf) {
        let clienteProcurado = this.consultarClientePeloCPF(cpf);
        let total = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo;
            }
        }
        return total;
    }
    obterTotalDinheiroDepositado() {
        let total = 0;
        for (let conta of this._contas) {
            total += conta.saldo;
        }
        return total;
    }
    calcularMediaSaldoContas() {
        return this.obterTotalDinheiroDepositado() / this._contas.length;
    }
    transferirTitularidade(numeroConta, cpf) {
        let contaProcurada = this.consultarContaPeloNumero(numeroConta);
        let novoTitular = this.consultarClientePeloCPF(cpf);
        if (contaProcurada && novoTitular
            && this.naoEstaoAssociados(contaProcurada, novoTitular)) {
            this.associarContaCliente(contaProcurada.numero, novoTitular.cpf);
        }
    }
    consultarContaPeloNumero(numero) {
        return this._contas.find(conta => conta.numero == numero);
    }
    consultarClientePeloCPF(cpf) {
        return this._clientes.find(cliente => cliente.cpf == cpf);
    }
    naoEstaoAssociados(conta, cliente) {
        if (conta.cliente?.cpf == cliente.cpf) {
            return false;
        }
        return true;
    }
    indiceDaConta(numero) {
        return this._contas.findIndex((conta) => conta.numero == numero);
    }
    indiceDoCliente(CPF) {
        return this._clientes.findIndex((cliente) => cliente.cpf == CPF);
    }
    carregarDados() {
        let conta1 = new Conta_1.Conta("111-1", 300);
        let conta2 = new Conta_1.Conta("222-2", 0);
        let conta3 = new Conta_1.Conta("333-3", 0);
        let conta4 = new Conta_1.Conta("444-4", 0);
        let conta5 = new Poupanca_1.Poupanca("555-5", 200, 10);
        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);
        this.inserirConta(conta5);
        let cliente1 = new Cliente_1.Cliente("Ely", '825', new Date(1979, 6, 29));
        let cliente2 = new Cliente_1.Cliente("Nicolas", '999', new Date(2004, 4, 24));
        let cliente3 = new Cliente_1.Cliente("Vitória", "123", new Date(2006, 11, 2));
        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);
        this.inserirCliente(cliente3);
        this.associarContaCliente('111-1', '825');
        this.associarContaCliente('222-2', '999');
        this.associarContaCliente('333-3', '825');
        this.associarContaCliente("555-5", "123");
    }
    get contas() {
        return this._contas;
    }
    get clientes() {
        return this._clientes;
    }
}
exports.Banco = Banco;
