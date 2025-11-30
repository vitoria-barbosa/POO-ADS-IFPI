export class Veiculo{
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number){
        this._placa = placa;
        this._ano = ano;
    }

    public andar():void{
        
    }

    public get placa(): string{
        return this._placa;
    }

    public set placa(placa: string){
        this._placa = placa;
    }

    public get ano(): number{
        return this._ano;
    }

    public set ano(ano: number){
        this._ano = ano;
    }
}

export class Carro extends Veiculo{
    private _modelo: string;

    constructor(placa: string, ano: number ,modelo: string){
        super(placa, ano);
        this._modelo = modelo;
    }

    public get modelo(): string{
        return this._modelo;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }
}

export class CarroEletrico extends Carro{
    private _autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }

    public get autonomiaBateria() : number {
        return this._autonomiaBateria;
    }
    
    public set autonomiaBateria(v : number) {
        this._autonomiaBateria = v;
    }
}