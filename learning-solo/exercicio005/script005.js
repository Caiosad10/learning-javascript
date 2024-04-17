function contar() {
  var inicio = document.getElementById("txtinicio");
  var fim = document.getElementById("txtfim");
  var passos = document.getElementById("txtpass");
  var res = document.getElementById("res");

  if (
    inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0
  ) {
    window.alert("Preencha os dados corretamente");
    res.innerHTML = "Quer contar o que, camarada?"
  } else {
    res.innerHTML = "Contando: ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passos.value);

    if (p == 0) {
        window.alert('Passo invalidado, será considerado 1')
        p = 1
    }
    if (i < f) {
      //Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} `;
      }
      //Contangem Decrescente
    } else if (i > f) {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} `;
      }
    }
  }
}
