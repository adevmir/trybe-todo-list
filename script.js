var itemnum = 1;
var itemCinza = 'item1';

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