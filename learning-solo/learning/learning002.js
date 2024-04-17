/* Entendendo DOM (Document Object Model)

DOM é um acronico para a palavra dentro dos parenteses acima, ele é um modelo de objeto para documentos. Ele não funciona dentro do node.js, apenas no navegador.

O que devemos fazer é a arvore DOM, e a arvore ela começa da raiz, que chamamos "window", ele é um objeto, e dentro desse, há mais objetos como "location", "document", "history" e mais

Dentro de "document" há o "html", e o "html" tem filhos: "head", e "body"

Dentro de "head" há "meta" e "title"; Dentro de "body" tem "h1", "p", "div"

E isso é a arvore DOM (eles são elementos)

A gente pode selecionar esses elementos, que seria por:

- marca
getElementsByTagName()
- id
getElementByID()
- nome
getElementsByName()
- classe
getElementsByClassName()
- seletor
querySelector() ou querySelectorAll()

Não há uma ordem, a forma em que acessamos é aque preferimos, podemos escolher qualquer um destes citados, e nos casos de "Elements", ele está no plural, entao temos que indicar qual queremos selecionar por meio do [] (0 sempre será o primeiro)

Na questão do seletor, dentro do parenteses, na hora de selecionar, usamos a sintaxe do CSS

*/

/* Eventos DOM

O evento é tudo o que pode acontecer com o que a gente selecionar

Por exemplo com o mouse, passamos pelo que a gente selecionou e os eventos irão disparar:

- mouseenter -> quando colocamos o mouse em cima
- mousemove -> quando movemos o mouse ainda em cima
- mousedown -> quando clicamos e seguramos
- mouseup -> quando soltamos depois de clicarmos e segurarmos
- click -> literalmente click
- mouseout -> a saida do mouse do local selecionado

Função - É um conjunto de codigos que vão ser executadas quando o evento ocorrer

se programarmos 10 linhas, isso é chamado de "bloco", as 10 linhas não serão executadas automaticamente, serão apenas executadas mediante aos eventos

Para poder fazer com que as 10 linhas sejam executadas mediantes aos eventes, colocamos ela num bloco, nomeamos ela como "function" e chamamos ela do queremos que aconteça, como "ação", e dentro esta "ação", colocamos os parametros

function ação(){
    "bloco"
}

exemplo com uma <div>:

<div id="area" onclick="clicar()">
...
</div>
....
<script>
    function clicar() {
        var a = window.document.getElementById('area')
        a.innerText = 'Clicou!'
    }
</script>
Sendo assim, criamos uma função de clique pois apos determinarmos o id, colocamos a ação que queremos que registre "onclick" e chamamos ela de "clicar"

Apos isso, fomos no script, adicionamos a função e colocamos o que queriamos, após isso determinamos a variavel para selecionar o elemento e damos a ela o valor de texto quando o evento acontecer

// Agora vimos um metodo de fazer isso funcionar, que é pegando a preposição "on" e colocando a função "click" colado nele. 

Porem se quisermos criar um jeito que conseguimos ter varias funções e não poluir o html colocando "on..." "on..." "on...", há um jeito que dá para se encurtar essas coisas:


<div id="area"">
...
</div>
....
<script>
    var a = window.document.getElementById('area') -> criamos uma variavel que busca o elemento no HTML
    a.addEventeListener('click', clicar) -> dado o valor de "a", fazemos com que seja adicionado o evento que escuta, dentro do parentese é o comando do evento, colocamos em aspas, depois dele acrescentamos a virgula para separar do comando o nome que queremos chamar a ação
    a.addEventeListener('mouseenter', entrou)
    a.addEventeListener('mouseout', saiu)

    function clicar() {
        a.innerText = 'Clicou!' -> dentro da função, adicionamos o que queremos que seja feito assim que executarmos o comando, e este aqui é de colocar o texto que botamos após o simbolo de igualdade
        a.style,background = 'red' -> aqui dizemos que assim que for efetuada a ação, seja feito a troca do estilo do background atual pela cor que selecionamos
    }
    function entrou() {
        a.innerText = 'Entrou!'
    } 
    function clicar() {
        a.innerText = 'Saiu!'
        a.style,background = 'blue'
    }
</script>
*/

//events reference - site para estudar e saber sobre os eventos

//Condições em JavaScript - Antes sabermos o que de fato é uma condição, precisamos saber que tudo o que ja vimos e fizemos foram sequencias, por exemplo:

var n = 5;
n += 4;
console.log(n);

//Não se pode fugir desta ordem. Sendo assim, "Condição" é quando queremos que possa mostrar outra coisa dependendo do fator.:
//if(condição) {
//  "bloco" -> true  (if = se sim)
//} else {
//  "bloco 2"  -> false  (else = se não)
//}

// Condições simples

var vel = 60.1;
console.log(`a velocidade é ${vel}`);
if (vel > 60) {
  console.log("velocidade muito alta, está multado");
}
console.log("digira com atenção redobrada, boa viagem!");

//Condições compostas -> exatamente a explicação acima da simples

var pais = "EUA";
console.log(`vivendo em ${pais}`);
if (pais != "Brasil") {
  console.log("Estrangeira");
} else {
  console.log("Brasileira");
}

//Condições Aninhadas

var idade = 65;
if (idade < 16) {
  console.log("Não vota");
} else {
  if (idade >= 16 && idade < 18) { 
    console.log("voto opcional");
  } else {
    if (idade >= 18 && idade < 65) {
      console.log("voto obrigatorio");
    } else {
        if (idade >= 64) {
            console.log("voto opcional");
        }
    }
  }
}


// or 

var idade = 65;
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 64) { 
    console.log("voto opcional");
} else {
    console.log("voto obrigatorio");
}

var agora = new Date()
var hora = agora.getHours()
var nome = "Victoria"
console.log(`Agora são exatamente ${hora} horas`);
if (hora < 12) {
    console.log(`Bom dia, ${nome}`);
} else if (hora < 18) {
    console.log(`Boa tarde, ${nome}`);
} else if (hora < 24) {
    console.log(`Boa noite, ${nome}`);
} 

//Condições Múltiplas - O comando usado aqui é: 

//switch (expressão) {
//    case valor 1:
//    "bloco"
//    break
//    case valor 2:
//    "bloco"
//    case valor 3:
//    break
//    default:
//    break
//}

// default é como se fosse o "else"
// break é uma regra e é obrigatorio nas case, menos no default mas podemos utilizado. Ele serve para saber oq foi pedido no switch já foi encontrado, tendo o break, ele fecha com o resultado, se não, é como se ele tivesse caçando o resultado ainda. - pesquisar

var now = new Date()
var diaSem = now.getDay()
/*
   0 - DOMINGO
   1 - SEGUNDA
   2 - TERÇA
   3 - QUARTA 
   4 - QUINTA 
   5 - SEXTA 
   6 - SABADO
*/

switch (diaSem) {
    case 0: 
        console.log('Hoje é Domingo');
        break;
    case 1:
        console.log("Hoje é Segunda");
        break
    case 2: 
        console.log(" Hoje é Terça");
        break
    case 3:
        console.log("Hoje é Quarta");
        break
    case 4:
        console.log("Hoje é Quinta");
        break
    case 5:
        console.log("Hoje é Sexta");
        break
    case 6: 
        console.log("Hoje é Sabado");
        break
    default:
        console.log("Dia invalido, algum erro aconteceu");
        break;
} 



// O switch é bom para dados pontuais: funciona com numeros e string