import java.util.Random;

public class JogoParImpar {
    private int numeroJogador;
    private String escolhaJogador;
    private int numeroMaquina;
    private String escolhaMaquina;
    Random aleatorio = new Random();

    public JogoParImpar(String escolhaJogador, int numeroJogador) {
        this.escolhaJogador = escolhaJogador;
        this.numeroJogador = numeroJogador;
        this.escolhaMaquina = escolhaJogador.equals("par") ? "impar" : "par";
    }

    public void sortearNumMaquina(){
        numeroMaquina = aleatorio.nextInt(1, 11);
    }

    public String resultado(){
        int soma = numeroJogador + numeroMaquina;
        return soma % 2 == 0 ? "par" : "impar";
    }

    public String vencedor(){
        return resultado().equals(escolhaJogador) ? "Jogador ganhou" : "Máquina ganhou";
    }

    public void jogoToData(){
        System.out.printf(
                """
                Jogador: %s
                Máquina: %s
                Número jogador: %d
                Número máquina: %d
                Soma: %d
                Resultado: %s!! %s
                """, escolhaJogador, escolhaMaquina, numeroJogador, numeroMaquina,
                numeroJogador + numeroMaquina, resultado(), vencedor());
    }

    public String getEscolhaJogador() {
        return escolhaJogador;
    }

    public void setEscolhaJogador(String escolhaJogador) {
        this.escolhaJogador = escolhaJogador;
    }

    public String getEscolhaMaquina() {
        return escolhaMaquina;
    }

    public void setEscolhaMaquina(String escolhaMaquina) {
        this.escolhaMaquina = escolhaMaquina;
    }

    public int getNumeroJogador() {
        return numeroJogador;
    }

    public void setNumeroJogador(int numeroJogador) {
        this.numeroJogador = numeroJogador;
    }

    public int getNumeroMaquina() {
        return numeroMaquina;
    }

    public void setNumeroMaquina(int numeroMaquina) {
        this.numeroMaquina = numeroMaquina;
    }
}
