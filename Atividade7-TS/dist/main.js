"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const Empregado_1 = require("./Empregado");
const Pessoa_1 = require("./Pessoa");
const Veiculo_1 = require("./Veiculo");
function main() {
    //Questão 1
    const veiculo = new Veiculo_1.Veiculo("ABC22", 2012);
    const carro = new Veiculo_1.Carro("ABC22", 2012, "Fiat");
    const BYD = new Veiculo_1.CarroEletrico("ABC22", 2012, "BYD", 2000);
    veiculo.andar();
    carro.andar();
    BYD.andar();
    //Questão 2
    const calculadora = new Calculadora_1.Calculadora(10, 20);
    console.log(calculadora.somar());
    //Questão 3
    const calcCientifica = new Calculadora_1.CalculadoraCientifica(3, 2);
    console.log(calcCientifica.exponenciar());
    //Questão 5
    const empregado1 = new Empregado_1.Empregado();
    const empregado2 = new Empregado_1.Diarista();
    const empregado3 = new Empregado_1.Horista();
    console.log(empregado1.calcularsalario());
    console.log(empregado2.calcularsalario().toFixed(2));
    console.log(empregado3.calcularsalario().toFixed(2));
    //Questão 6
    const pessoa = new Pessoa_1.Pessoa("Vitória", "Barbosa");
    console.log(pessoa.nomeCompleto);
    //Questão 7
    const funcionario = new Pessoa_1.Funcionario("Júlia", "Barbosa", "345", 1000.00);
    console.log(funcionario.calcularSalarioPrimeiraParcela());
    console.log(funcionario.calcularSalarioSegundaParcela());
    //Questão 8
    const professor = new Pessoa_1.Professor("Ely", "Costa", "876", 20000.00, "ABC");
    console.log(professor.calcularSalarioPrimeiraParcela());
    console.log(professor.calcularSalarioSegundaParcela());
    //Questão 9
    let pessoas = [];
    pessoas.push(pessoa, funcionario, professor);
    const pagamento = new Pessoa_1.FolhaDePagamento(pessoas);
    console.log(pagamento.calcularPagamentos());
}
main();
