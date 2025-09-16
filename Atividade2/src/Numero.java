public class Numero {
    private int valor;

    public Numero(int valor) {
        this.valor = valor;
    }

    public boolean ehPar(){
        return this.valor % 2 == 0;
    }

    public boolean ehImpar(){
        return !this.ehPar();
    }
}
