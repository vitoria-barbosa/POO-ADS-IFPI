public class Jogador {
    private int forca;
    private int nivel;
    private int pontosAtuais;

    public Jogador(int forca, int nivel, int pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    public int calcularAtaque(){
        return this.forca * this.nivel;
    }

    public void atacar(Jogador jogadorAtacado){
        if (jogadorAtacado.estaVivo()){
            int dano = this.calcularAtaque();
            jogadorAtacado.pontosAtuais -= dano;
        }
    }

    public boolean estaVivo(){
        return this.pontosAtuais > 0;
    }

    public int getForca() {
        return this.forca;
    }

    public void setForca(int forca) {
        this.forca = forca;
    }

    public int getNivel() {
        return this.nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public int getPontosAtuais() {
        return this.pontosAtuais;
    }

    public void setPontosAtuais(int pontosAtuais) {
        this.pontosAtuais = pontosAtuais;
    }
    
}
