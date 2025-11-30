"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horista = exports.Diarista = exports.Empregado = void 0;
class Empregado {
    _salario = 500.00;
    calcularsalario() {
        return this._salario;
    }
    get salario() {
        return this._salario;
    }
    set salario(v) {
        this._salario = v;
    }
}
exports.Empregado = Empregado;
class Diarista extends Empregado {
    calcularsalario() {
        return super.calcularsalario() / 30;
    }
}
exports.Diarista = Diarista;
class Horista extends Diarista {
    calcularsalario() {
        return super.calcularsalario() / 24;
    }
}
exports.Horista = Horista;
