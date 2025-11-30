import { Calculadora, CalculadoraCientifica } from "./Calculadora";
import { Empregado, Diarista, Horista } from "./Empregado";
import { FolhaDePagamento, Funcionario, Pessoa, Professor } from "./Pessoa";
import { Veiculo, Carro, CarroEletrico } from "./Veiculo";

function main(){
    //Questão 1
    const veiculo: Veiculo = new Veiculo("ABC22", 2012);
    const carro: Carro = new Carro("ABC22", 2012, "Fiat");
    const BYD: CarroEletrico = new CarroEletrico("ABC22", 2012, "BYD", 2000);
    veiculo.andar();
    carro.andar();
    BYD.andar();

    //Questão 2
    const calculadora: Calculadora = new Calculadora(10, 20);
    console.log(calculadora.somar());

    //Questão 3
    const calcCientifica: CalculadoraCientifica = new CalculadoraCientifica(3, 2);
    console.log(calcCientifica.exponenciar());

    //Questão 5
    const empregado1: Empregado = new Empregado();
    const empregado2: Diarista = new Diarista();
    const empregado3: Horista = new Horista();

    console.log(empregado1.calcularsalario());
    console.log(empregado2.calcularsalario().toFixed(2));
    console.log(empregado3.calcularsalario().toFixed(2));

    //Questão 6
    const pessoa: Pessoa = new Pessoa("Vitória", "Barbosa");
    console.log(pessoa.nomeCompleto);

    //Questão 7
    const funcionario: Funcionario = new Funcionario("Júlia", "Barbosa", "345", 1000.00);
    console.log(funcionario.calcularSalarioPrimeiraParcela());
    console.log(funcionario.calcularSalarioSegundaParcela());

    //Questão 8
    const professor: Professor = new Professor("Ely", "Costa", "876", 20000.00, "ABC");
    console.log(professor.calcularSalarioPrimeiraParcela());
    console.log(professor.calcularSalarioSegundaParcela());

    //Questão 9
    let pessoas: Pessoa[] = [];
    pessoas.push(pessoa, funcionario, professor);
    const pagamento: FolhaDePagamento = new FolhaDePagamento(pessoas);
    console.log(pagamento.calcularPagamentos());
}

main();