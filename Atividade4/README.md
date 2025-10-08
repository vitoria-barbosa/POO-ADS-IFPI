### Atividade 4

1. F - F - V - F - V - V - V

2. Não, pois como quantReservas é um atributo da classe, se não for atribuido nenhum valor a ela, na execução do programa ela será inicializada com um valor padraão, que é 0.

3. Construtor em Java:
```java
public Hotel(int quantReservas){
    this.quantReservas = quantReservas;
}
```
4. O código gerará um erro de compilação pois foi definido um construtor que recebe um número para atribuir ao atributo volume, porém no momento da instanciação, não é passado o número do volume no construtor, para resolver, basta colocar o número 10 entre os parênteses na instânciação.

5.
a. O resultado dos prints vão ser 90, pois todos estavam referenciando o mesmo objeto, então, quando fez o saque de c1, diminuiu o saldo para 90 em todos os objetos, enquanto na transferência, por c1 e c2 serem o mesmo objeto, não mudou nada no valor.
b. O objeto que c1 apontava, foi excluido da mémoria depois, pelo garbage collector.

9. Na minha opnião tanto retornar um valor booleano quanto deixar a função void estão corretos e fica à escolha de quem está implementando 