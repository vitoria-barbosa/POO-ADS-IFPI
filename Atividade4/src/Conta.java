public class Conta {
    private int idConta;
    private String numero;
    private double saldo;

    public Conta(int id, String numero, double saldo){
        this.idConta = id;
        this.numero = numero;
        this.saldo = saldo;
    }

    public boolean sacar(double valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
            return true;
        }
        
        return false;
    }

    public void depositar(double valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

    public boolean transferir(Conta conta, double valor){
        if(this.sacar(valor)){
            conta.depositar(valor);
            return true;
        }

        return false;

    }

    public void verificarSaldo(){
        System.out.println("Saldo: R$ " + this.saldo);
    }

    public int getIdConta() {
        return this.idConta;
    }

    public void setIdConta(int idConta) {
        this.idConta = idConta;
    }

    public String getNumero() {
        return this.numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public double getSaldo() {
        return this.saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

}
