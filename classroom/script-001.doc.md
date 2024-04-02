#Variaveis

Primeiramente, para se criar uma variavel e determinar o seu valor, precisamos usar as palavras-chaves. Estas são as palavras:

var -> podem iniciar vazias e pode ter seu valor alterado
let -> pode iniciar vazia e não pode ter o valor alterado
const -> Não pode iniciar vazia e nem ter seu alterado. Como ela signifca "constante", ela não pode ser alterada

![Getting started](./imagem.png/Captura%20de%20tela%202024-03-31%20103134.png)

No exemplo acima:

- O primeiro log enviará o resultado de undefined pois como explicado, a palavra-chave "var" pode iniciar vazia
- O segundo log é para mostrar que a variavel que iniciou vazia, pode ser preenchida, ou seja, alterada
- O terceiro log mostra que a palavra-chave "let" também pode iniciar vazia

##Variaveis com numero podem ser tanto com as aspas ou sem, se por acaso forem com aspas, ela será uma string, mas podemos fazer com que nos retornem como numero. Ex:

![Getting started](./imagem.png/Captura%20de%20tela%202024-03-31%20102729.png)

Number -> (Construtor) Não é uma função em si, é uma função especial, usada para criar e inializar objetos. O "Number" fará com que transformemos a string que determinamos em numero

![Getting started](./imagem.png/Captura%20de%20tela%202024-03-31%20102823.png)

Desse jeito, podemos fazer com que essa, antes string, se entenda como um numero e que se possa fazer calculos com essa variavel.

#Valor booleano


![Getting started](./imagem.png/Captura%20de%20tela%202024-03-31%20104036.png)

##Vamos categorizar a 4º linha para que possamos entender o que significa este comando com valor booleano:

- const -> palavra-chave
- resultT -> variavel
- = -> atribuição
- isAAdult -> condição 1
- <= -> operador relacional
- isATeenager -> condição 2
- ? -> operador ternario que significa "se sim"
- isEnabled -> valor booleano "true"
- : -> operador ternario que significa "se não"
- false -> valor booleano "false

Como o valor da variavel "isEnabled" foi determinado como "True" , caso a condição for verdadeira, ele nos retornará o valor desta variavel. Ou seja, caso fizessemos uma variavel e colocassemos no lugar do "false", caso a questão fosse falsa, o log nos retornaria o valor da variavel em que colocamos no lugar de "false"

Nesta imagem vemos também varios sinais de "=". As diferenças do sinal de igual são:

- = -> Atribuição
- == -> Igualdade de valor - valor
- === -> Igualdade estrita - valor e tipo

Vimos também que citamos "operador relacional". Os operadores relacionais são:

- ">" -> Maior
- "<" -> Menor
- ">=" -> Maior ou igual
- "<=" = Menor ou igual
- "==" = Igualdade de valor. Ex: 5 == 5 -> True; 5 == '5' -> True
- "===" -> Igualdade restrita (Valor e tipo). Ex: 5 === 5 -> True; 5 === '5' -> False
- "!=" -> Desigualdade de valor
- "!==" -> Desigualdade estrita

Para toda expressão que tenha a operação relacional, terá um valor booleano

#Operador Ternario (Um atalho para a instrução (if... else))


Seus operadores são aqueles citados anteriormente:

- ? -> Se verdade
- : -> Se falso

##Para se trabalhar com o operador ternário, temos que colocar duas condições, que é exatamente o que colocamos no "const resultT" (Estamos verificando se isAAdult é menor ou igual a isATennager). Após isso, colocamos o operador "?" que funcionará como "se sim", após isso é o valor booleano "True" (podemos colocar uma variavel para representar caso seja verdade), e em seguida adicionamos ":", ele funcionará como "se não", e será o valor booleano "False" (e também podemos colocar uma variavel para representar).

Aqui está um outro exemplo na qual se usa duas variaveis, uma será para verdadeira e outra para falsa:

![Getting started](./imagem.png/Captura%20de%20tela%202024-03-31%20130550.png)

Seus operadores são estes citados acima:

- ? -> Se verdade
- : -> Se falso

#Operadores logicos

- ! -> Negação. Se colocarmos antes da condição será considerado para inverter o que queremos. Ainda na variavel "resultT", se sem ele estavamos querendo obter se isAAdult é menor ou igual a isATeenager, o correto é para dar falso. Já com o "!" na frente, podemos interpretar como "a condição não é", ou seja, significa a negação.
- && -> Conjunção (e). Usado para saber se uma condição é verdadeira, caso adicionarmos uma segunda condição, se ela não for verdadeira, o resultado dará "False". Caso a primeira condição seja "False" e a segunda seja "True", o resultado será "False" também. Só será "True" se as duas condições forem "True"
- || -> Disjunção (ou). Usado para se uma ou outra condição for verdadeira, repetindo o tipo da conjução, porem se apenas uma condição for verdadeira, ele dará "True", independentemente se for a primeira ou a segunda. So será "False se as duas condições forem "False"

Eles tem uma precedencia, que é nesta ordem mesmo
