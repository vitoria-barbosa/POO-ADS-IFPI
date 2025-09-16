### Atividade 2

1) Na tipagem dinâmica não é preciso especificar o tipo da varíável, se é int, float, string ou boleano. Já na tipagem estática, logo na definição da variável é necessário definir o seu tipo.

2) Na tipagem dinâmica, como o tipo da variável é definido em tempo de execução, ou seja, quando o programa está rodando, então a chance de dar algum erro durante a execução do código é muito maior

3) 
```javascript

    let idade = 20;
    idade = "vinte";

    console.log(idade + 1); // saida: "vinte1"
```

4) Dá erro, não é possível atribuir uma string a uma variável do tipo number.

5) Ao declarar `let nome = "Ely"` o tipo de nome é string.

6) A linguagem C é considerada de tipagem fraca pois permite conversões implícitas e operações entre tipos diferentes sem exigir que declare explicitamente a conversão. Exemplo:
```c
#include <stdio.h>

int main() {
    int x = 10;
    float y = 3.5;

    float resultado = x + y;

    printf("Resultado: %f\n", resultado);
    return 0;
}
```
Saída: 13.500000. A varíavel x foi convertida para float automaticamente.

7) Não, em TypeScript não há dois tipos distintos como int e float, mas sim um único tipo (number) que engloba tanto números decimais inteiros como de ponto flutuante.

8)   
  a. saída: `105`, por b ser string o JavaScript concatenou tudo  
  b. saída: `3`, true em valor númerico pode ser 1, por isso ocorreu a soma  
  c. saída: `true` para tudo, pois em JavaScript uma string vazia é considerado falsy e null é equivalente ao undefined  

9)   
  a. O TypeScript também concatena, mostrando "105", pois uma das variáveis é string  
  b. Na hora de somar, o TypeScript acusa um erro, ao dizer que é possível usar o operador + com booleano e int  
  c. nas duas primeiras comparações aparece o erro:"Essa comparação parece não ser intencional porque os tipos 'número' e 'booleano' não se sobrepõem", já na última, o resultado é true  
    
16) Quando a opção allowUnreachableCode: false (padrão), o TypeScript avisa sempre que encontra código que nunca pode ser executado, mas o arquivo JS ainda é gerado normalmente. Já quando a opção é alterada para true, o TypeScript não mostra mais o aviso e a como há o return a linha nunca é executada.

17) Na opção noImplicitAny: false, o valor vira any automaticamente e o código roda. Já noImplicitAny: true, o compilador reclama de valor porque ele ficou sem tipo declarado.

18) Com strictNullChecks: false, as variáveis aceitam null e undefined mesmo sem você dizer.EX:
```typescript
let nome: string;
nome = null;       
nome = undefined;
```
Já com strictNullChecks: true, as variáveis só aceitam null ou undefined se você declarar explicitamente no tipo.