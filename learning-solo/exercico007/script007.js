let numero = document.getElementById("number");
let tabela = document.getElementById("seltab");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(numero)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = window.document.createElement("option");
    item.text = `O valor ${numero.value} foi adicionado!`;
    tabela.appendChild(item);
    res.innerHTML = ''
  } else {
    window.alert("Nenhum numero foi adicionado ou valor repetido");
  }

  numero.value = ''
  numero.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores primeiramente')
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) 
      maior = valores[pos] 
      if (valores[pos] < menor)
    menor = valores[pos]
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} numeros adicionados</p>`
    res.innerHTML += `<p>O maior numero é ${maior} </p>`
    res.innerHTML += `<p>O menor numero é ${menor} </p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma} </p>`
  }
}

/*
  else {
    let add = Number(numero.value);
    for (var tab = add; tab < 100; tab += add) {
      let item = window.document.createElement("option");
      item.text = `O valor ${tab} foi adicionado!`;
      item.value = `tabela${tabela}`;
      tab.appendChild(item);
    }
  }
}
*/
