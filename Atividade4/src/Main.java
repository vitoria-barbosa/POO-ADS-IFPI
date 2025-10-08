public class Main{

    public static void quemTemMaisPontos(Jogador jog1, Jogador jog2){
        System.out.printf(
        """
        JOGADOR 1: %d pontos
        JOGADOR 2: %d pontos
        JOGADOR VENCEDOR: %s  
        """, jog1.getPontosAtuais(), jog2.getPontosAtuais(), jog1.getPontosAtuais() > jog2.getPontosAtuais() ? "Jogador 1" : jog2.getPontosAtuais() > jog1.getPontosAtuais() ? "Jogador 2" : "Deu empate"
        );

    }
    public static void main(String[] args) {

        // Questao 6
        System.out.println("Q6");
        Triangulo t1 = new Triangulo(10, 20, 30);
        Triangulo t2 = new Triangulo(15, 20, 30);
        Triangulo t3 = new Triangulo(10, 10, 5);
        
        System.out.println(t1.ehEquilatero() ? "T1 é equilátero" : "T1 não é equilátero");
        System.out.println(t2.ehEscaleno() ? "T2 é escaleno" : "T2 não é escaleno");
        System.out.println(t3.ehIsoceles() ? "T3 é isóceles" : "T3 não é isóceles");
    
        // Questao 7
        System.out.println("\nQ7");
        Equipamento equip = new Equipamento();

        equip.ligar();
        equip.ligar();
        equip.desligar();
        equip.inverter();
        equip.estaLigado();
    
        // Questao 8
        System.out.println("\nQ8");
        Conta c1 = new Conta(1, "123", 100.00);
        Conta c2 = new Conta(2, "321", 50.00);

        c1.depositar(20.00);
        System.out.println(c1.sacar(30.00) ? "Saque feito com sucesso!" : "Saldo insuficiente para fazer o saque.");
        System.out.println(c2.sacar(60.00) ? "Saque feito com sucesso!" : "Saldo insuficiente para fazer o saque.");
        System.out.println(c1.transferir(c2, 200) ? "Saque feito com sucesso!" : "Saldo insuficiente para fazer o saque.");
        c1.verificarSaldo();
        c2.verificarSaldo();

        // Questao 10
        Jogador jogador1 = new Jogador(10, 2, 100);
        Jogador jogador2 = new Jogador(15, 3, 100);

        jogador1.atacar(jogador2);
        jogador2.atacar(jogador1);
        jogador1.atacar(jogador2);
        System.out.println("\nQ10");
        quemTemMaisPontos(jogador1, jogador2);

    }
}