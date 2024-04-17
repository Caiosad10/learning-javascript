// Aqui ficará todas as coisas anotadas sobre o que estou aprendendo de Javascript em um curso e as anotações daqui serão da minha concepção.

// Part1

/* O que JS é capaz de fazer?

 // Na primeira aula em que vi, mostrou que conseguimos mudar o conteudo dos sites pelo console, selecionando o que a gente quer e alterando

 // Certamente não alterará o site para todos, apenas para mim, e eu entendi o pq isso acontece.

 // O que acontece é o Cliente x Servidor, E o que seria isso é o seguinte:

 * Servidor - Tecnologia de alta performance que armazena todos os dados da internet.

 * Cliente - Aquele que acessa esses dados.

  // Para o cliente acessar o dado/conteudo, ele basicamente lança a instrução, que é aquilo que ele deseja, e essa instrução passará para a nuvem e chegará no servidor. Depois da nuvem obter aquilo na qual o cliente queria, será passado uma copia para o cliente. 

  // Então, a alteração, na qual citei aqui em cima, só será na copia, assim que der reload na pagina, ficará tudo normal novamente.
*/

// Part2

/* ECMAScript 

 //Versão padronizada do JS. Surgiu 1997 e foi se evoluindo com o passar dos anos. A partir de 2015, se chamou de ES5, e começou a  ser atualizada anualmente

 //Tecnologias (framework) que usa JS:
 Query - Conjunto de biblioteca, facilitava o uso de interatividade em JS

 A - É uma linguagem declarativa semelhante o SQL
 
 React - Mesma funcionalidade do A
 
 Vue - Ex programador da Google cansado do A, criou sua propria tecnologia para facilitar
 
 Electron - Especializado para interfaces graficas
 
 IONIC - É um sdk para criar aplicações em dispositivos moveis 
 
 Cordova - (Citou mas não explicou, talvez eu não tenha captado tambem)

*/

//Part3

// Montando o primeiro codigo em JS

var a1 = "Caçarolas";

// var -> Variavel
// a1 -> Identificador (nome da variavel)
// = -> Atribuição
// " " -> String
// Caçarolas -> Valor da variavel

/* A String no JS pode ser por 3 modos -> " "; ' '; ` `.

Identificadores - Podem começar com letras, "$" ou "_"; Não podem começar com numeros; É possivel usar letras ou numeros; É possivel usar acentos e simbolos; Não pode conter espaços; Não podem ser palavras reservadas ("var" é uma palavra reservada que significa variavel, então quando se diz isso, não se pode colocar: *var* var = a) 

*/

// Data Types (typeof)

var x = 5;
console.log(typeof x);

var y = "Forza";
console.log(typeof y);

// Isso vai retornar que tipo de dado está na variavel

// E quais são os Data Types?

//- Number: -1, 1.0, 1

var numero = 20;
console.log(numero);

//- String: " ", ' ', ` `

var palavra = "Camarada";
console.log(palavra);

// Há como concatenar com o simbolo aritmeticos "+"

console.log("Como você está " + palavra + "?");

//Como podemos ver, desse modo, não parece complexo, mas assim que juntamos varias variveis e queremos fazer a concatenação, acaba ficando complexo e chato de digitar. Há um outro modo que resume a escritura deste comando (DETALHE - só é possivel usar deste modo utilizando a crase)

var comp1 = "tempo";
var comp2 = "tambem";
var comp3 = "estudar";
var comp4 = "jogar";
console.log(
  `Como você está ${palavra}? Você está com ${comp1}? Estou afim de ${comp3}, ta afim ${comp2}? Caso não esteja, bora ${comp4}`
);

//- Boolean: True or false

var laranja = 5.5;
var uva = 4.5;
var verdade = "A laranja é mais cara";
var mentira = "A uva não é mais cara";
const resultadoVerdadeiro = laranja > uva ? verdade : mentira;
const resultadoFalso = laranja < uva ? verdade : mentira;

console.log(resultadoVerdadeiro);
console.log(resultadoFalso);

//- Null: Absolutamente nada

var vazio = null;
console.log(vazio);

//- Undefined: Indefinido

var indefinição
console.log(indefinição);

//- Object: {}, [] - O "{}" Serve para adicionar mais de um dado para uma unica variavel

const usuario = {
  nome: "Sergio",
  idade: 20,
  graduacao: "Engenharia de Software",
  profissao: "Programador",
};

console.log(usuario);

// O "[]" também é um objeto, conhecida com "Array", serve para fazer lista

var filmes = ["Robcop", "Madmax", "Batman", "Flash"];

console.log(filmes);

// Da para fazer tambem a junção dos 2 - [] {}

var listaDeUsuario = [
  {
    nome: "Joao",
    idade: 20,
    graduacao: "Engenharia de Software",
    profissao: "Programador",
  },
  {
    nome: "Victoria",
    idade: 20,
    graduacao: "Marketing",
    profissao: "Mercadologa",
  },
];

console.log(listaDeUsuario);

//- Function: function(){}

// Colocar exemplo aqui

// Os 3 primeiros listado são os primitivos

// Para converter string em um numero, se usa o seguinte comando:

var numero1 = "5";
var numero2 = "5";
console.log(numero1 + numero2);

var numero1 = Number.parseInt("5");
var numero2 = Number.parseInt("5");
console.log(numero1 + numero2);

// No caso contrario, o comando será:

var string1 = String(5);
var string2 = String(5);
console.log(string1 + string2);

// Formatação String - Se dar quando queremos alterar a forma que a variavel foi definida: Há a de contar quantos caracteres a string tem, tem a de deixar tudo maiusculo e a de tudo minusculo

var contar = "Paralelepipedo";
const count = contar.length;
console.log(count);

var maiusculo = "paralelepipedo";
const upper = maiusculo.toUpperCase();
console.log(upper);

var minusculo = "PARALELEPIPEDO";
const lower = minusculo.toLowerCase();
console.log(lower);

// Fomartando numero - Você pode colocar varios zeros alem do numero digitado, como se ele fosse um numero real. Sendo assim, pode ate trocar o ponto por virgula.

var n = 8;
console.log(n.toFixed(3));

var n = 9;
console.log(n.toFixed(2).replace(".", ","));

//Da ate para dar um comando de localizar como se fosse uma contagem da moeda local

console.log(n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));

// Operadores - Quais são eles?

// Aritmeticos: +, -, *, /, %, ** (% - Divisão inteira. Ex: 5/2 = 2,5; 5%2 = 1 (pois para o 5 dividir por 2, o numero multiplicado por 2 que chega perto de 5 é 2, sendo assim, ficará 5 - 4 = 1; O 1 é o resto, e ele será o valor inteiro para a conta que levar o sinal de %, ou seja, ele obtem o resultado do resto!.... O / é a Divisão rea)

console.log(5 % 2);

// Para essa questão de operações aritmeticas, há uma precedencia. São eles:

/*(Precedencia é a mesma coisa que preferencia aqui)

-> () - Qualquer calculo que estiver dentro de parentese, terá preferencia: Ex: 
*/

console.log(5 + 3 / 2);

// O resultado desta conta será 6.5, pois na ordem da precedencia, o / ainda é acima de +. Porem está conta está errada na realidade

console.log((5 + 3) / 2);

// Aqui o resultado será 4, que é a realidade

//-> ** - isso é potencia, o o numero que a gente escolher será elevado ao numero que a gente escolher tambem

console.log(5 ** 5);

//-> *, /, % - * É mulitplicação, / Divisão real, % Divisão inteira

// -> +, -

// Atribuição - Ha 3 tipos
//-> Simples

var a = 5 + 3;
var b = a * 2;
var c = a + b;

console.log(a + b + c);

//-> Auto-atribuição

var a = 3;
console.log((a += 4));

//Incremento - Igual a auto-atribuição, porem é apenas para o numero 1, no exemplo vai ser soma, entçao o que eu quero dizer aqui é que será somado a 1

var a = 1;
console.log(a++);
// OBS: não funcionou, irei estudar

/* 

Relacionais - >; <; >=; <=; ==; != (Para toda expressão que tenha a operação relacional, terá um valor booleano)
 - > = Maior
 - < = Menor
 - >= = Maior ou igual
 - <= = Menor ou igual 
 - == = Igualdade de valor. Ex: 5 == 5 -> True; 5 == '5' -> True
 - === = Igualdade restrita (Valor e tipo). Ex: 5 === 5 -> True; 5 === '5' -> False
 - != = Desigualdade de valor


Logicos - !, &&, || (A precedencia é nesta ordem) 
 - ! = Negação
 - && = conjunção (e). Usado para saber se uma condição é verdadeira, caso adicionarmos uma segunda condição, se ela não for verdadeira, dará False. Caso a primeira condição seja False e a segunda seja True, o resultado será False também. Só será True se as duas condições forem True
 - || = disjunção (ou). Usado para se uma ou outra condição for verdadeira, repetindo o tipo da conjução, porem se apenas uma condição for verdadeira, ele dará True, independentemente se for a primeira ou a segunda. So será False se as duas condições forem False



Ternarios - ?, : (atalho de If...else)
 - ? = Se verdade 
 - : = Se falso

*/
