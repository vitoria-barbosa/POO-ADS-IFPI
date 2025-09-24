import java.util.*;

public class TraduzirEmojis {
    private static final Map<String, String> dicionario = new HashMap<>();

    public TraduzirEmojis(){
        dicionario.put("amor", "❤️");
        dicionario.put("futebol", "⚽");
        dicionario.put("cachorro", "🐶");
    }

    public String traduzirFrase(String frase){
        StringBuilder fraseTraduzida = new StringBuilder();

        String[] listaPalavras = frase.split(" ");

        for (String palavra : listaPalavras){
            fraseTraduzida.append(dicionario.getOrDefault(palavra.toLowerCase(), palavra));
            fraseTraduzida.append(" ");
        }
        return fraseTraduzida.toString().trim();
    }
}