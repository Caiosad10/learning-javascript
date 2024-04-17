function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formularioAno = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    window.alert(
      "[ERROR] Parece que houve algum erro. Verifique e tente novamente"
    );
  } else {
    var formularioSex = document.getElementsByName("radsex");
    var idade = ano - formularioAno.value;
    var genero = "";
    var definição = "";
    var img = document.createElement("img"); // este comando cria um elemento como se estivesse html, que é a de imagem
    img.setAttribute("id", "photo"); // este comando coloca a identificadação dele, na primeira aspa está o tipo e na segunda está o nome de como queremos identifica-lo
    if (formularioSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        definição = "uma criança";
        img.getAttribute("src", "deathimg.png"); // comando faz com que se busque a imagem que voce desejar. (Certamente ela tem que está dentro do arquivo/pasta onde se está fazendo o codigo)
      } else if (idade < 21) {
        //jovem
        definição = "um jovem";
      } else if (idade < 50) {
        //adulto
        definição = "um adulto";
      } else {
        //idoso
        definição = "um velho";
      }
    } else if (formularioSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        definição = "uma criança";
      } else if (idade < 21) {
        //jovem
        definição = "uma jovem";
      } else if (idade < 50) {
        //adulto
        definição = "uma adulta";
      } else {
        //idoso
        definição = "uma velha";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Voce é ${definição}, tem ${idade} anos!`;
    res.appendChild(img); // Comando que adicionará a imagem abaixo do formulario
  }
}
