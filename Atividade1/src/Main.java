//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // 7
        Retangulo retangulo = new Retangulo();

        System.out.printf("Área do Retângulo: %.2f %n", retangulo.calcularArea());
        System.out.printf("Perímetro do Retângulo: %.2f %n", retangulo.calcularPerimetro());
        // 8
        Circulo circulo = new Circulo(8.0);

        System.out.printf("Área do círculo: %.2f %n", circulo.calcularArea());
        System.out.printf("Perímetro do círculo: %.2f %n", circulo.calcularPerimetro());
        // 9
        SituacaoFinaceira situacaoFinaceira = new SituacaoFinaceira(500.00,700.00);

        System.out.printf("Saldo: %.2f", situacaoFinaceira.calcularSaldo());
    }
}