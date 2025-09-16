public class Produto{
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public double aplicarDesconto(int percentual){
        return this.preco - (this.preco * percentual / 100);
    }

    public String emitirOrcamento(){
        String mensagem = String.format(
        """
        Produto: %s, Preço: R$ %.2f
        Desconto: 10% -> Novo preço: R$ %.2f        
        """, this.nome, this.preco, this.aplicarDesconto(10));
        return mensagem;
    }

}