public class Equipamento {
    private boolean ligado = false;
    
    public void ligar(){
        if(!ligado){
            this.ligado = true;
        }else{
            System.out.println("O equipamento já está ligado");
        }
    }

    public void desligar(){
        if (ligado) {
            this.ligado = false;
        }else{
            System.out.println("O equipamento já está desligado.");
        }
    }

    public void inverter(){
        this.ligado = !ligado;
    }

    public void estaLigado(){
        System.out.println(this.ligado ? "O equipamento está ligado" : "O equipamento está desligado");
    }

}
