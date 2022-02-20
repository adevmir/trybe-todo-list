var itemnum = 1;
var itemCinza = 'item1';
if (localStorage.listaSalva) {
    document.querySelector('#lista-tarefas').innerHTML = localStorage.listaSalva;
}

function criaTarefa(li) {
    let item = 'item' + itemnum;  
    const lista = document.createElement(li);
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    lista.innerText = textoTarefa;
    lista.setAttribute("onclick", "fundoCinza('" + item + "')");
    lista.setAttribute("id", item);
    lista.setAttribute("class", 'item');
    lista.setAttribute("ondblclick", "completedItem('" + item + "')")
    itemnum += 1;

    var create = document.querySelector('ol');
    create.appendChild(lista);
    document.querySelector('#texto-tarefa').value = '';
}

function fundoCinza(item) {
  const itemAnterior = document.getElementById(itemCinza);
  itemAnterior.setAttribute("style", 'background-color: white;');
    const itemList = document.getElementById(item);
    itemList.setAttribute("style", "background-color: gray;");
    itemCinza = item;
}

function completedItem(completedId) {
    const itemList = document.getElementById(completedId);
    const itemClass = itemList.className;
    if (itemClass === 'completed') {
        itemList.setAttribute("class", 'item');
    } else {
        itemList.setAttribute("class", 'completed');
    }
}

function limpaLista() {
    const div = document.querySelector("#lista-tarefas");
    div.innerHTML = "";
}

function removerFinalizados() {
    const finalizados = document.querySelectorAll('.completed');
    for (let a = 0; a < finalizados.length; a += 1) {
        document.querySelector("#lista-tarefas").removeChild(finalizados[a]);
    }
}

function salvarLista() {
    let listaUser = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('listaSalva', listaUser);
    console.log(listaUser);
}