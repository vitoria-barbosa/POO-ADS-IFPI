public class SituacaoFinaceira {
    double ValorDebitos;
    double ValorCreditos;

    SituacaoFinaceira(double ValorDebitos, double ValorCreditos){
        this.ValorDebitos = ValorDebitos;
        this.ValorCreditos = ValorCreditos;
    }

    double calcularSaldo(){
        return ValorCreditos - ValorDebitos;
    }
}
