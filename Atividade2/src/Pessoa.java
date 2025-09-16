public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String apresentar(){
        return String.format("Meu nome é %s e tenho %d", this.nome, this.idade);
    }
}
