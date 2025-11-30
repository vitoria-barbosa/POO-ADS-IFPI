import { Cliente } from "./Cliente";
import { Conta } from "./Conta"
import { ContaImposto } from "./ContaImposto";
import { Poupanca } from "./Poupanca";

export class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];
    private _idClienteAtual: number;
    private _idContaAtual: number;
    
    constructor() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual = 1;
        this._idContaAtual = 1;
    }

    public inserirConta(conta: Conta) {
        conta.id = this._idContaAtual++;
        
        if (!this.consultarContaPeloNumero(conta.numero)) { // insere a conta no array de contas se não tiver nenhuma com aquele número.
            this._contas.push(conta);
        }
    }
    
    public inserirCliente(cliente: Cliente): void {
        cliente.id = this._idClienteAtual++
        
        if (!this.consultarClientePeloCPF(cliente.cpf)) { // insere o cliente no array de clientes se não tiver nenhum cliente com o mesmo cpf.
            this._clientes.push(cliente);
        }
    }
    
    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(numeroConta);
        let clienteProcurado: Cliente | undefined = this.consultarClientePeloCPF(cpfCliente);
        
        if (contaProcurada && clienteProcurado && this.naoEstaoAssociados(contaProcurada, clienteProcurado)) {
                contaProcurada.cliente = clienteProcurado;
                clienteProcurado.contas.push(contaProcurada);
            }
    }

    public sacar(numero: string, valor: number): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(numero);
        
        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }
    
    public depositar(numero: string, valor: number): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(numero);
        
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    
    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta | undefined = this.consultarContaPeloNumero(numeroOrigem);
        let contaDestino: Conta | undefined= this.consultarContaPeloNumero(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    
    public renderJuros(numero: string): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(numero);
        
        if (contaProcurada) {
            if (contaProcurada instanceof Poupanca) {
                (<Poupanca>contaProcurada).renderJuros();
                /* o cast é desnecessário após o if conforme abaixo.
                Cortesia do typescript
                contaProcurada.renderJuros();
                */
            }
        }
    }
    
    public realizarOrdemBancaria(numeroContaOrigem: string, numerosContasDestino: string[], valor: number): void {
        let contaOrigem: Conta | undefined = this.consultarContaPeloNumero(numeroContaOrigem);
        
        if(contaOrigem){
            for (let numeroDestino of numerosContasDestino) {
                let contaDestino = this.consultarContaPeloNumero(numeroDestino);
                
                if (contaDestino) {
                    contaOrigem.sacar(valor);
                    contaDestino.depositar(valor);
                }
            }
        }
    }

    public excluirConta(numero: string): void {
        let indiceProcurado: number = this.indiceDaConta(numero);
        
        if (indiceProcurado >= 0) {
            this._contas.splice(indiceProcurado, 1);
        }
    }
    
    public excluirCliente(cpf: string) {
        let cliente: Cliente | undefined = this.consultarClientePeloCPF(cpf);
        
        if (cliente){
            let indiceCliente = this.indiceDoCliente(cpf);
            this._clientes.splice(indiceCliente, 1);

            for (let conta of cliente.contas) {
                conta.cliente = null;
            }
        }
    }

    public alterarConta(conta: Conta): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(conta.numero);
        
        if (contaProcurada) {
            contaProcurada = conta;
        }
    }
    
    public listarContasSemCliente(): Conta[] {
        let contas: Conta[] = [];
        
        for (let conta of this._contas) {
            if (conta.cliente == null) {
                contas.push(conta);
            }
        }
        
        return contas;
    }
    
    public listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente | undefined = this.consultarClientePeloCPF(cpf);
        let contas: Conta[] = [];
        
        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }
    
    public totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente | undefined = this.consultarClientePeloCPF(cpf);
        let total: number = 0;
        
        if (clienteProcurado){
            for(let conta of clienteProcurado.contas) {
                total += conta.saldo
            }
        }
        
        return total;
    }
    
    public obterTotalDinheiroDepositado(): number {
        let total: number = 0;
        
        for (let conta of this._contas) {
            total += conta.saldo;
        }
        return total;
    }
    
    public calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado() / this._contas.length;
    }
    
    public transferirTitularidade(numeroConta: string, cpf: string): void {
        let contaProcurada: Conta | undefined = this.consultarContaPeloNumero(numeroConta);
        let novoTitular: Cliente | undefined = this.consultarClientePeloCPF(cpf);
        
        if(contaProcurada && novoTitular 
            && this.naoEstaoAssociados(contaProcurada, novoTitular)){
            this.associarContaCliente(contaProcurada.numero, novoTitular.cpf);
        }
    }

    public consultarContaPeloNumero(numero: string): Conta | undefined {
        return this._contas.find(conta => conta.numero == numero);
    }
    
    public consultarClientePeloCPF(cpf: string): Cliente | undefined{
        return this._clientes.find(cliente => cliente.cpf == cpf);
    }
    
    private naoEstaoAssociados(conta: Conta, cliente: Cliente): boolean {

        if (conta.cliente?.cpf == cliente.cpf) {
            return false;
        }
        return true;
    }

    private indiceDaConta(numero: string): number {
        return this._contas.findIndex((conta) => conta.numero == numero);
    }
    
    private indiceDoCliente(CPF: string): number {
        return this._clientes.findIndex((cliente) => cliente.cpf == CPF);
    }
    
    public carregarDados() {
        let conta1: Conta = new Conta("111-1", 300);
        let conta2: Conta = new Conta("222-2", 0);
        let conta3: Conta = new Conta("333-3", 0);
        let conta4: Conta = new Conta("444-4", 0);
        let conta5: Conta = new Poupanca("555-5", 200, 10);
        
        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);
        this.inserirConta(conta5);
        
        let cliente1: Cliente = new Cliente("Ely", '825', new Date(1979, 6, 29));
        let cliente2: Cliente = new Cliente("Nicolas", '999', new Date(2004, 4, 24));
        let cliente3: Cliente = new Cliente("Vitória", "123", new Date(2006, 11, 2));
        
        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);
        this.inserirCliente(cliente3);
        
        
        this.associarContaCliente('111-1', '825');
        this.associarContaCliente('222-2', '999');
        this.associarContaCliente('333-3', '825');
        this.associarContaCliente("555-5", "123");
    }
    
    public get contas() : Conta[] {
        return this._contas;
    }

    public get clientes() : Cliente[] {
        return this._clientes;
    }
    
}