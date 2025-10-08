public class Triangulo{
    private int lado1;
    private int lado2;
    private int lado3;

    public Triangulo(int l1, int l2, int l3){
        this.lado1 = l1;
        this.lado2 = l2;
        this.lado3 = l3;
    }

    public boolean ehTriangulo(){
        return lado1 + lado2 >= lado3 && lado1 + lado3 >= lado2 && lado2 + lado3 >= lado1;
    }

    public boolean ehIsoceles(){
        if(ehTriangulo()){
            return lado1 == lado2 || lado1 == lado3 || lado2 == lado3;
        }else{
            return false;
        }
    }

    public boolean ehEquilatero(){
        if(ehTriangulo()){
            return lado1 == lado2 && lado2 == lado3;
        }else{
            return false;
        }
    }

        public boolean ehEscaleno(){
        if(ehTriangulo()){
            return lado1 != lado2 && lado2 != lado3 && lado1 != lado3;
        }else{
            return false;
        }
    }
    
    public int getLado1(){
        return this.lado1;
    }

    public int getLado2(){
        return this.lado2;
    }
    
    public int getLado3(){
        return this.lado3;
    }

    public void setLado1(int lado){
        this.lado1 = lado;
    }
    
    public void setLado2(int lado){
        this.lado2 = lado;
    }

    public void setLado3(int lado){
        this.lado3 = lado;
    }

}