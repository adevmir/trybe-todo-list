var itemnum = 1;
if (localStorage.itemCinza){
    var itemCinza = localStorage.itemCinza
} else {
    var itemCinza = 'item1';
}
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
    if (itemClass === 'completed' || itemClass === 'item completed') {
        itemList.setAttribute("class", 'item');
    } else {
        itemList.setAttribute("class", 'item completed');
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
    localStorage.setItem('itemCinza', itemCinza);
}

function moverCima() {
   const subir = document.getElementById(itemCinza);
   const atrSubir = subir.getAttribute('id');
   let numId = itemCinza[4];
   let itemAcima = 'item' + (numId - 1);
   const descer = document.getElementById(itemAcima);
   const atrDescer = descer.getAttribute('id');
   const listaForm = document.getElementById('lista-tarefas');
   listaForm.insertBefore(subir, descer);
   subir.setAttribute('id', atrDescer, 'onclick');
   descer.setAttribute('id', atrSubir, 'onclick');
   subir.setAttribute('onclick', "fundoCinza('" + itemAcima + "')");
   descer.setAttribute('onclick', "fundoCinza('" + itemCinza + "')");
   itemCinza = itemAcima;
}

function moverBaixo() {
    const descer = document.getElementById(itemCinza);
    const atrDescer = descer.getAttribute('id');
    let numId = itemCinza[4];
    numId = parseInt(numId, 10);
    let itemBaixo = 'item' + (numId + 1);
    const subir = document.getElementById(itemBaixo);
    const atrSubir = subir.getAttribute('id');
    const listaForm = document.getElementById('lista-tarefas');
    listaForm.insertBefore(subir, descer);
    subir.setAttribute('id', atrDescer, 'onclick');
    descer.setAttribute('id', atrSubir, 'onclick');
    subir.setAttribute('onclick', "fundoCinza('" + itemBaixo + "')");
    descer.setAttribute('onclick', "fundoCinza('" + itemCinza + "')");
    itemCinza = itemBaixo;
 }