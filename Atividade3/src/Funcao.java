import java.util.List;
import java.util.Random;

public class Funcao {
    // Questão 1
    public static boolean ehPar(int numero){
        return numero % 2 == 0;
    }

    // Questão 2
    public static void saudacao(String nome){
        saudacao(nome, "Sr.");
    }

    public static void saudacao(String nome, String pronomeTratamento) {
        System.out.printf("%s %s %n", pronomeTratamento, nome);
    }

    // Questão 3
    public static StringBuilder mostrarNumeros(int[] listaDeNumeros){
        StringBuilder numeros = new StringBuilder();
        for(int numero : listaDeNumeros){
            numeros.append(String.format("%d - ", numero));
        }
        numeros.delete(numeros.length()-2,numeros.length()-1); //remove o " -" do final da string

        return numeros;
    }

    // Questão 5
    public static void exibir(String ...elementos) {
        for (String elemento : elementos) {
            System.out.println(elemento);
        }
        System.out.println("-----");
    }

    // Questão 9
    public static String nomeAleatorio(List<String> listaDeNomes){
        Random aleatorio = new Random();
        int indiceAleatorio = aleatorio.nextInt(0, listaDeNomes.size());

        return listaDeNomes.get(indiceAleatorio);
    }
}