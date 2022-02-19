var itemnum = 1;
var contClickList = 1;

function criaTarefa(li) {
    let item = 'item' + itemnum;  
    const lista = document.createElement(li);
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    lista.innerText = textoTarefa;
    lista.setAttribute("onclick", "fundoCinza('" + item + "')");
    lista.setAttribute("id", item);
    lista.setAttribute("class", 'item');
    itemnum += 1;

    var create = document.querySelector('ol');
    create.appendChild(lista);
    document.querySelector('#texto-tarefa').value = '';
}

function fundoCinza(a) {
  if (contClickList > 1) { 
    const itemAnterior = document.querySelector(".selected")
    itemAnterior.setAttribute("class", "item");
    itemAnterior.setAttribute("style", 'background-color: white;');
  }
    const itemList = document.getElementById(a);
    itemList.setAttribute("style", "background-color: gray;");
    itemList.setAttribute("class", "selected");
    contClickList += 1;
}