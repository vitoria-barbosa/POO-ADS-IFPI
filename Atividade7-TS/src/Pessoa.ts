export class Pessoa{
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string, sobrenome: string){
       this._nome = nome;
       this._sobrenome = sobrenome; 
    }

    public get nome(): string{
        return this._nome;
    }
    
    public set nome(v : string) {
        this._nome = v;
    }

    public get sobrenome(): string{
        return this._sobrenome;
    }

    public set sobrenome(v : string) {
        this._sobrenome = v;
    }
    
    public get nomeCompleto(): string{
        return this._nome + " " + this.sobrenome;
    }
}

export class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, matricula);
        this._matricula = matricula;
        this._salario = salario  >= 0 ? salario : 0;
    }

    public calcularSalarioPrimeiraParcela(){
        return this._salario *  (60/100);
    }

     public calcularSalarioSegundaParcela(){
        return this._salario *  (40/100);
    }
    
    public get matricula() : string {
        return this._matricula;
    }
    
    public set matricula(v : string) {
        this._matricula = v;
    }
    
    public get salario() : number {
        return this._salario;
    }
    
    public set salario(v : number) {
        this._salario = v;
    }
    
}

export class Professor extends Funcionario{
    private _titulacao: string;

    constructor(nome:string, sobrenome: string, matricula: string, salario: number, titulacao: string){
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    public calcularSalarioPrimeiraParcela(): number{
        return this.salario;
    }

     public calcularSalarioSegundaParcela(): number{
        return 0;
    }

    public get titulacao() : string {
        return this._titulacao
    }

    public set titulacao(v : string) {
        this._titulacao = v;
    }
}

export class FolhaDePagamento{
    private _funcionarios: Pessoa[];

    constructor(funcionarios: Pessoa[]){
        this._funcionarios = funcionarios;
    }

    public calcularPagamentos(): number{
        let totalSalarios: number = 0;
        for(let funcionario of this._funcionarios){
            if(funcionario instanceof Funcionario){
                <Funcionario> funcionario;
                totalSalarios += funcionario.salario;
            }
        }

        return totalSalarios;
    }
}