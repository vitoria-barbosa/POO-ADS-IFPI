"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolhaDePagamento = exports.Professor = exports.Funcionario = exports.Pessoa = void 0;
class Pessoa {
    _nome;
    _sobrenome;
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(v) {
        this._sobrenome = v;
    }
    get nomeCompleto() {
        return this._nome + " " + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
class Funcionario extends Pessoa {
    _matricula;
    _salario;
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, matricula);
        this._matricula = matricula;
        this._salario = salario >= 0 ? salario : 0;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * (60 / 100);
    }
    calcularSalarioSegundaParcela() {
        return this._salario * (40 / 100);
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(v) {
        this._matricula = v;
    }
    get salario() {
        return this._salario;
    }
    set salario(v) {
        this._salario = v;
    }
}
exports.Funcionario = Funcionario;
class Professor extends Funcionario {
    _titulacao;
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
    get titulacao() {
        return this._titulacao;
    }
    set titulacao(v) {
        this._titulacao = v;
    }
}
exports.Professor = Professor;
class FolhaDePagamento {
    _funcionarios;
    constructor(funcionarios) {
        this._funcionarios = funcionarios;
    }
    calcularPagamentos() {
        let totalSalarios = 0;
        for (let funcionario of this._funcionarios) {
            if (funcionario instanceof Funcionario) {
                funcionario;
                totalSalarios += funcionario.salario;
            }
        }
        return totalSalarios;
    }
}
exports.FolhaDePagamento = FolhaDePagamento;
