export class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(op1: number, op2: number){
        this._operando1 = op1;
        this._operando2 = op2;
    }

    public somar(): number{
        return this._operando1 + this._operando2;
    }
    
    public get operando1() : number {
        return this._operando1;
    }
    
    public set operando1(v : number) {
        this._operando1 = v;
    }

    public get operando2() : number {
        return this._operando2;
    }
    
    public set operando2(v : number) {
        this._operando2 = v;
    }
}

export class CalculadoraCientifica extends Calculadora{
    
    constructor(op1: number, op2: number){
        super(op1, op2);
    }

    public exponenciar(): number{
        return Math.pow(this.operando1, this.operando2);
    }
}