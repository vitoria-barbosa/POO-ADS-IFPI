public class Circulo {
    double raio;

    Circulo(double raio){
        this.raio = raio;
    }

    double calcularArea(){
        return Math.PI * Math.pow(raio, 2);
    }

    double calcularPerimetro(){
        return 2 * Math.PI * raio;
    }
}
