import java.util.ArrayList;
import java.util.List;
import java.util.Random;
// Questão 11
public class Sorteio {
    private List<String> listaDeNomes = new ArrayList<>();

    public void adicionarNomeNaLista(String nome){
        this.listaDeNomes.add(nome);
    }

    public String sortearNome(){
        Random aleatorio = new Random();
        int indiceAleatorio = aleatorio.nextInt(0, this.listaDeNomes.size());

        return this.listaDeNomes.get(indiceAleatorio);
    }

    public List<String> getListaDeNomes() {
        return listaDeNomes;
    }

    public void setListaDeNomes(List<String> listaDeNomes) {
        this.listaDeNomes = listaDeNomes;
    }
}