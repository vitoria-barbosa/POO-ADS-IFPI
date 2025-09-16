public class Informacoes {
    private String nome;
    private double salario;
    private String linguagem;

    public Informacoes(String nome, double salario, String linguagem) {
        this.nome = nome;
        this.salario = salario;
        this.linguagem = linguagem;
    }

    public void exibirMensagem(){
        String mensagem = String.format(
        """
        %s
        My payment time is R$ %.2f
        and
        my preffered language is %s        
        """, this.nome, this.salario, this.linguagem);

        System.out.println(mensagem);
    }
}
