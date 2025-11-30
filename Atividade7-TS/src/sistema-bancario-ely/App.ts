import { Conta } from "./Conta";
import { Banco } from "./banco";
import { Cliente } from "./Cliente";
import { Poupanca } from "./Poupanca";
import { ContaImposto } from "./ContaImposto";

import prompt from "prompt-sync";
const input = prompt();

class App {
    private banco: Banco;

    constructor() {
        this.banco = new Banco();
        this.banco.carregarDados();
    }

    menu() {
        let opcao: number;

        do {
            console.log('\nBem-vindo! Escolha uma opção:');
            console.log('\nContas:');
            console.log('01 - Inserir       02 - Consultar  03 - Sacar');
            console.log('04 - Depositar     05 - Excluir  06 - Transferir');
            console.log('07 - Totalizações  08 - Realizar ordem bancária');
            console.log('09 - Transferir Titularidade  10 - Contas sem clientes');
            console.log('11 - Render juros');
            console.log('\nClientes:');
            console.log('20 - Inserir    21 - Consultar   22 - Associar ');
            console.log('23 - Total aplicado por cliente  24 - Listar contas');
            console.log('\nBanco');
            console.log('30 - Listas Contas   31 - Listar Clientes');
            console.log('0 - Sair');
            opcao = parseInt(input("Opção: "));
            switch (opcao) {
                case 1:
                    this.inserirConta();
                    break;
                case 2:
                    this.consultarConta();
                    break;
                case 3:
                    this.sacar();
                    break;
                case 4:
                    this.depositar();
                    break;
                case 5:
                    this.excluirConta();
                    break;
                case 6:
                    this.transferir();
                    break;
                case 7:
                    this.totalizacoes();
                    break;
                case 8:
                    this.realizarOrdemBancaria();
                    break;
                case 9:
                    this.transferirTitularidade();
                    break;
                case 10:
                    this.listarContasSemClientes();
                    break;
                case 11:
                    this.renderJuros();
                    break;
                case 20:
                    this.inserirCliente();
                    break;
                case 21:
                    this.consultarCliente();
                    break;
                case 22:
                    this.associarContaCliente();
                    break;
                case 23:
                    this.totalizarSaldoCliente();
                    break;
                case 24:
                    this.listarContasCliente();
                    break;
                case 30:
                    this.listarContasBanco();
                    break;
                case 31:
                    this.listarClientesBanco();
                    break;
                case 0:
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
            input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao != 0);

        console.log("Aplicação encerrada.");

    }


    private inserirConta(): void {
        console.log("\nCadastrar conta:");
        let numero: string = input('Digite o número da conta: ');
        let saldo: number = parseFloat(input('Digite o saldo inicial da conta: '));
        let tipo: string = input('Digite o tipo da conta: 1 - Conta   2 - Poupança  3 - Conta Imposto');
        let conta: Conta;

        if (tipo == '2') {
            conta = new Poupanca(numero, saldo, 10
                
            );
        } else if (tipo = '3') {
            conta = new ContaImposto(numero, saldo, 1);

        } else {
            conta = new Conta(numero, saldo);
        }

        this.banco.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    private sacar(): void {
        console.log("\nSaque:");
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do saque: '));
        this.banco.sacar(numero, valor);
        console.log("Saque realizado.");
        this.exibirExtrato(numero);
    }

    private depositar(): void {
        console.log("\nDepósito:");
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do depósito: '));
        this.banco.depositar(numero, valor);
        console.log("Depósito realizado.");
        this.exibirExtrato(numero);
    }

    private transferir(): void {
        console.log("\nTransferência:");
        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let numeroDestino: string = input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(input('Digite o valor da transferência: '));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada.");
        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);
        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    }

    private renderJuros(): void {
        console.log("\nRender juros:");
        let numero: string = input('Digite o número da poupança: ');
        this.banco.renderJuros(numero);
        console.log("Operacao realizada realizada.");
        console.log("\nExtrato:");
        this.exibirExtrato(numero);
    }

    private consultarConta(): void {
        console.log("\nConsultar conta:");
        let numero: string = input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    }

    private excluirConta(): void {
        console.log("\nExcluir conta:");
        let numero: string = input('Digite o número da conta: ');
        this.banco.excluirConta(numero);
        console.log("Conta excluída com sucesso.");
    }

    private exibirExtrato(numero: string): void {
        const conta = this.banco.consultarContaPeloNumero(numero);
        if (conta) {
            const cliente = conta.cliente;
            console.log("\n=== Extrato da Conta ===");
            console.log(`ID: ${conta.id}`);
            console.log(`Número da conta: ${conta.numero}`);
            console.log(`Saldo: ${conta.saldo}`);
            if (cliente) {
                console.log("\n=== Dados do Cliente ===");
                console.log(`ID: ${cliente.id}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`CPF: ${cliente.cpf}`);
            } else {
                console.log("Cliente: Não associado.");
            }
            console.log("=========================\n");
        } else {
            console.log("Conta não encontrada para exibir extrato.");
        }
    }

    private totalizacoes(): void {
        console.log("\nTotalizações:");
        console.log(`Quantidade de contas: ${this.banco.listarContasCliente.length}`);
        console.log(`Total depositado no banco: ${this.banco.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.banco.calcularMediaSaldoContas()}`);
    }

    private inserirCliente(): void {
        console.log("\nCadastrar cliente:");
        let nome: string = input('Digite o nome do cliente: ');
        let cpf: string = input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(input('Digite a data de nascimento (AAAA-MM-DD): '));
        let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log("Cliente cadastrado com sucesso");
    }

    private consultarCliente(): void {
        console.log("\nConsultar cliente:");
        let cpf: string = input('Digite o CPF do cliente: ');
        let cliente = this.banco.consultarClientePeloCPF(cpf);
        if (cliente) {
            console.log(`Cliente encontrado: ID ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    private associarContaCliente(): void {
        console.log("\nAssociar conta a cliente:");
        let numeroConta: string = input('Digite o número da conta: ');
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        this.banco.associarContaCliente(numeroConta, cpfCliente);
        console.log("Conta associada ao cliente com sucesso");
    }

    private totalizarSaldoCliente(): void {
        console.log("\Totalizar saldo por cliente:");
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        let total = this.banco.totalizarSaldoCliente(cpfCliente);
        console.log("Total: " + total);
    }

    private realizarOrdemBancaria() {
        console.log("\Realizar ordem bancária");
        let numeroConta: string = input('Digite o número da conta de origem: ');
        let valor: number = Number(input('Valor a ser transferido para cada conta: '));
        let numeros: string[] = input('Digite os números das constas separadas por espaço: ').split(" ");
        this.banco.realizarOrdemBancaria(numeroConta, numeros, valor);
        console.log(numeros);

        console.log("\Conta de origem");
        this.exibirExtrato(numeroConta);
        console.log("\Contas de destino");
        for (let numero of numeros) {
            this.exibirExtrato(numero);

        }

        console.log("Ordem bancária realizada com sucesso.")
    }
    private transferirTitularidade() {
        console.log("\Transferir titularidade de conta");
        let numeroConta: string = input('Digite o número da conta: ');
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        this.banco.transferirTitularidade(numeroConta, cpfCliente);
        this.exibirExtrato(numeroConta);
        console.log("Transferência de titularidade realizada com sucesso");
    }

    private listarContasSemClientes() {
        console.log("\Listar contas sem clientes");
        let contas: Conta[] = this.banco.listarContasSemCliente();

        for (let conta of contas) {
            this.exibirExtrato(conta.numero);
        }
    }

    private listarContasCliente() {
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        let contas: Conta[] = this.banco.listarContasCliente(cpfCliente);
        for (let conta of contas) {
            this.exibirExtrato(conta.numero);
        }
    }

    private listarContasBanco(){
        console.log("Contas do Banco:");
        
        for(let conta of this.banco.contas){
            this.exibirExtrato(conta.numero);
        }
    }

    private listarClientesBanco(){
        console.log("Clientes do Banco:");
        
        for(let cliente of this.banco.clientes){
            console.log(
            `
            ID: ${cliente.id};
            Nome: ${cliente.nome};
            CPF: ${cliente.cpf};
            --------------------------
            `
            );
        }
    }
}


let app: App = new App();
app.menu()