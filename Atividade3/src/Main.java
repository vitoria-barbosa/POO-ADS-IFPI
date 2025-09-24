import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        // Q1
        System.out.println(Funcao.ehPar(20)? "É par" : "Não é par");

        // Q2
        Funcao.saudacao("Ely");

        // Q3
        int[] listaDeNumeros = {5, 6, 7, 8, 9, 10};
        System.out.println(Funcao.mostrarNumeros(listaDeNumeros));

        // Q5
        Funcao.exibir("a", "b");
        Funcao.exibir("a", "b", "c");
        Funcao.exibir("a", "b", "c", "d");

        // Q6
        Ola ola = () -> System.out.println("Olá");
        ola.executar();

        // Q7
        List<Integer> array = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
        List<Integer> pares = array.stream().filter(num -> num % 2 == 0).toList();
        System.out.println("Array: " + array);
        System.out.println("Números pares: " + pares);

        // Q8
        List<Integer> array2 = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        List<Integer> arrayDobrado = array2.stream().map(num -> num * 2).toList();
        int somatorio = arrayDobrado.stream().reduce(0, (soma, atual) -> soma + atual);
        System.out.println("Array 2: " + array2);
        System.out.println("Array dobrado: " + arrayDobrado);
        System.out.println("Somatório: " + somatorio);

        // Q9
        List<String> listaDeNomes = new ArrayList<>(List.of(
                "Vitoria", "Malu", "Claudenes", "Thalisson", "Junior", "Ana", "Ely", "Rogério"
        ));
        System.out.println(Funcao.nomeAleatorio(listaDeNomes));

        // Q10
        Autenticacao autenticacao = new Autenticacao("admin", "9876");
        System.out.println(autenticacao.ehValido() ? "Usuário e senha válidos" : "Usuário ou senha incorretos");

        // Q11
        Sorteio sorteio = new Sorteio();
        sorteio.adicionarNomeNaLista("Vitória");
        sorteio.adicionarNomeNaLista("Thalisson");
        sorteio.adicionarNomeNaLista("Junior");
        sorteio.adicionarNomeNaLista("Ana");
        System.out.println(sorteio.sortearNome());

        // Q12
        JogoParImpar imparPar = new JogoParImpar("par", 8);
        imparPar.sortearNumMaquina();
        imparPar.jogoToData();

        //Q13
        TraduzirEmojis tradutorEmoji = new TraduzirEmojis();
        System.out.println(tradutorEmoji.traduzirFrase("O amor do Brasil é futebol"));
    }
}
