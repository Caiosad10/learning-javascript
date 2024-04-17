/* Estruturas de repeticão:

Funciona com uma condição, so que inves de seguir para o fim, caso a condição o que a gente quer que repita, a instrução volta para a condição e executa novamente, formando-se um laço, e quando não for mais possivel, quebra-se o laço e chega no fim da instrução

Para poder fazer isso, inves de utilizarmos "if", utilizaremos "while" (que traduzindo significa "enquanto")

então o codigo ficará assim:

while (condição) {

}

Exemplo de sintaxe como função: 
*/
function comerPizza() {
    while (temFatia()) {
        comerFatia()
    }
}

//- Com teste logico no inicio

var n = 1
while (n <= 2) {   // Nesta linha, basicamente se interpreta como "Enquanto essa condiçao for verdadeira" (A condição é o teste logico)
    console.log(n); //E já desta linha em diante significa "Faça"
    n++ 
} //E aqui, enquanto a condição for verdadeira, ela ficará se repetindo (looping)

//- Com o teste no final

var n1 = 1
do {   // Nesta linha e dentro das chaves significa "Faça"
console.log(n1);
    n1++ 
} while (n1 <= 3) // E aqui complementa como "..Se enquanto isso for verdade"

//- Com controle
//Com esse a sintaxe muda, ele fica assim:

//for (inicio ; teste ; incr) {
    
//}

//Exemplo pratico (É a mesma coisa que vimos nos outros exemplos, ou seja, para utilizar as estruturas de repetições, há tres jeitos de fazer):

for (var n2=1; n2<=4; n2++) {
    console.log(n2)
}
