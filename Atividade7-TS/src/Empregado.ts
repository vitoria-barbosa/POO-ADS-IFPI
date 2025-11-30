export class Empregado{
    private _salario: number = 500.00;

    public calcularsalario(): number{
        return this._salario;
    }
    
    public get salario() : number {
        return this._salario;
    }
    
    public set salario(v : number) {
        this._salario = v;
    }
}

export class Diarista extends Empregado{
    public calcularsalario(): number {
        return super.calcularsalario() / 30;
    }
}

export class Horista extends Diarista{
    public calcularsalario(): number {
        return super.calcularsalario() / 24;
    }
}