public class Main {
    public static void main(String[] args) {

        // Quaestão 10
        Informacoes info = new Informacoes("Ely", 2000.00, "TypeScript");
        info.exibirMensagem();

        // Questão 11
        String mensagem = "TypeScript É MUITO LEGAL!";
        System.out.println(mensagem.toLowerCase());
        System.out.println(mensagem.length());

        double pi = 3.1415;
        System.out.println(String.format("O valor de pi é %.2f %n", pi));

        // Questão 12
        Pessoa pessoa = new Pessoa("Ely", 46);
        System.out.println(pessoa.apresentar());

        // Questão 13
        Produto produto = new Produto("Caneta", 5.00);
        System.out.println(produto.emitirOrcamento());

        // Questão 14
        Numero numero = new Numero(9);
        System.out.println("O número é par? " + numero.ehPar());
        System.out.println("O número é ímpar? " + numero.ehImpar());

    }
}