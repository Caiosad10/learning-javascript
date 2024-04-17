
/* Variaveis compostas

A sua diferença é que a variavel simples só consegue amarzenar um valor por vez

Já a composta é capaz de armazenar varios valores em uma mesma estrutura

Ou seja, com a simples, conseguimos atualizar o valor/dado da variavel, já com a composta, apenas colocamos mais valores/dados na variavel

Vamos ver exemplos de como podemos reduzir o trabalho que teriamos com as variaveis simples e como podemos reduzir com as variaveis completas
*/ 

var a0 = ''
var a1 = ''
var a2 = ''
var a3 = ''
var a4 = ''

let a = [ , , ,]  //isso é um vetor (Array), e ele é composto por elemtentos (espaço, valor e indice), o indice acompanha o elemento pois ele é a "chave" (identificação do valor) 

//"Uma variavel composta (Array) é uma variavel que tem varios elementos (espaço) cada elemento é composto por seu valor e por uma chave de identificação"

//Exemplo funcional

let num =[ 1, 2, 3]
console.log(`Nosso vetor é ${num}, está funcionando!`); 

//Podemos acrescentar valores também:

num[3] = 6 //Isso significa que queremos que o espaço 3 tenha o valor 6 (Lembrando que por mais que adicionemos 3 valores anteriormente, a linguagem de programação entende o "0" como espaço, então no exemplo funcional os espaços são '0, 1, 2', e aqui estamos querendo que se tenha o espaço '3' com o valor 6)

console.log(num); 

//Caso não queiramos saber ou seja impossivel de saber qual espaço acrescentar, podemos utlizar o comando a seguir:

num.push(7) //Este comando adicionará mais um espaço correspondente e dentro do parentese o valor desse espaço, assim atualizamos o numero de espaço e o valor do espaço novo acrescentado
console.log(num); 

//Caso queiramos saber o comprimento (os espaços que já temos) tambem se tem um comando que nos mostrará:

console.log(num.length) //"length" é um atributo, e no total temos 5 espaços: 0, 1, 2, 3, 4

//Comando que ordena os elementos(valores) da forma que quisermos:

console.log(num.sort()) //Desse jeito padrão, ele ordena de forma crescente os valores

//Comando para sabermos qua valor está no espaço que queremos ver:

console.log(num[2]); //Dentro do vetor ("[]") é a posição que queremos saber

//Caso efetuarmos o "sort" antes de efetuar o comando que nos mostrá qual o valor de determinada posição, ele nos dará o valor da posição já com o resultado do "sort". E se quisermos adicionar mais um espaço com valor, é a mesma coisa

num.push(4);
console.log(`Agora nosso vetor está assim: ${num}`);
console.log(`E ele tem agora ${num.length} posições`);
console.log(`E podemos conserta-lo de novo. Agora ele está por ordem novamente, veja: ${num.sort()}`);

//Caso tivermos muitos espaços com seus respectivos valores e queremos ver todos os valores respectivos, há uma instrução que usamos e ele usa a estrutura de repetição:

for(let pos = 0; pos < num.length; pos++) { //for(inicialização; condição; incrementação) ou seja, em uma linha de codigo, eu estou pedindo para criar a variavel, apos isso, insiro a condição que desejo, e se for verdade, que faça a incrementação, sendo assim, de forma literal, esta linha está dizendo "A variavel (pos) recebe valor de 0, se essa variavel for menor ao numero de espaços da variavel (num), acrescente mais 1. Já que "for" é uma estrutura de repetição, irá repetir ate que a condição que dada seja falsa 
    console.log(`A posição ${pos} tem o valor ${num[pos]}`); //Neste log, resultará as posições que foram criadas para a variavel "pos", que são as mesmas da de "num", e queremos que mostre os valores das posições de "num"
}

//Como isso é possivel? Simples! Para poder sabermos os valores de de todas as posições, já sabemos que instrução usar (console.log(num)) -> Dentro da variavel, mostrará em forma de vetor os valores), mas e se quisermos que no resultado não apareça em forma de vetor? Se quisermos que seja mais descritivel? A gente cria uma variavel que terá todos os elementos (espaços) da variavel que já tem todos os valores, e como queremos que não apareça em forma de vetor, o normal seria:

console.log(`O valor da posição 1 é ${num[0]}`)

// e assim, trocando na string a posição e o valor dentro do vetor para poder nos mostrar o valor do espaço em que queremos de forma descritiva

//Então como podemos ver, quando dizemos (num[pos]), estamos querendo com que ele busque todos os valores de das posições pois o "pos" contem todas as posições, já que antes de efetuarmos o log, pedimos para que o valor da "pos" fique sendo acrescentado sempre mais 1 ate chegar o valor de posições da variavel "num" 

//Ainda assim, tem um jeito mais resumido de fazer. Podemos simplificar ainda mais e utilizando a estrutura de repetição "for":

for(let position in num) { //Lemos este codigo da seguinte maneira: for -> "Para cada"; in -> "Dentro de". Então basicamente estamos pedindo que a variavel position receba valores conforme a quantidade de elementos dentro de outra variavel (composta)
    console.log(num[position]);
}

//Estamos vendo muito como buscar os valores de determinadas posições ou de todas as posições, mas tambem podemos buscar posições com determinados valores, e é assim:

console.log(`a posição do valor que temos é a ${num.indexOf(7)}`);

//Caso utilizarmos um valor que não exista em nenhuma posição, nos retornará -1:

console.log(num.indexOf(5))

// or 

let elemento = num.indexOf(5)
if (elemento == -1) {
    console.log('O valor não foi encontrado');
} else { 
    console.log(`a posição do valor que temos é a ${elemento}`)
}

/* Funções mais avançadas em JS:

Toda função precisa ter chamada; para toda chamada, precisa do seu parametro; apos isso, acontece a ação; e assim que realizada, houve o retorno.

Ou seja

Funções são ações executadas assim que são chamadas ou em decorrencia de algum evento

Uma função pode receber parametros e retornar um resultado

*/ // Ex:

function parOuImpar(n) { //Primeiro lançamos a função com a chamada, dentro da chamada é o paramento
    if (n % 2 == 0) { //Essa é a condição
        return 'par' // Isso é o que eu quero que de fato de retorne
    } else {
        return 'impar' // E isso a mesma coisa
    } 
}

let res = parOuImpar(11) // Aqui eu crio a variavel que recebe justamente o valor da chamada e parametro, e aqui eu substituo por um valor real

console.log(res); //No momento em que eu executar, ele me mostrará que o valor da variavel que criei é impar

// or 

console.log(parOuImpar(11));

//Outro exemplo

function soma(n1, n2) {
    return n1 + n2
}
 console.log(soma(5, 2));

 //Basicamente, pelo que eu entendi, é mais um jeito de se criar uma variavel. "Pq acha isso?"

 //Simples: A função ta chamando "soma", e que dentro do parentese de "soma", é o valor, só que esse valor não está de fato definido, porem, mesmo assim, pedimos para uma ação seja realizada com os valores dentro do parentese de "soma". Sendo assim, a ação que pedimos é para somar n1 e n2. Quando fechamos a função, buscamos o log e dentro dele colocamos justamente "soma", e dentro do parentese de "soma", colocamos os reais valores de n1 e n2, respectivamente. Contudo, o log nos retornará o resultado da soma. 

 // Ou seja

 // É a mesma coisa que criamos duas variaveis, atribuirmos os seus valores, e dar um log utilizando os operadores aritmeticos. Veja:

 var numero1 = 5
 var numero2 = 2
 console.log(numero1 + numero2);

 // E o resultado é o mesmo!

 //É possivel colocar uma função dentro de uma variavel

 var v = function(x) {
    return x*2
}
console.log(v(5));

// Podemos ate calcular fatoriais (5! = 5 x 4 x 3 x 2 x 1 = 120)

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    } 
    return fat
}

console.log(fatorial(5));

// Função recursiva

function fator(n) {
    if (n == 1) {
    return 1
    } else {
        return n * fator(n-1)
    }
} 

// Objeto

let amigo = {
    nome:'jose',
    sexo:'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou');
        this.peso += p;
    }
}

amigo.engordar(2)

console.log(amigo);

console.log(amigo.nome);

console.log(`O ${amigo.nome} pesa ${amigo.peso}`);

