let itemnum = 1;
let itemCinza = 1;
const listaTarefaId = document.querySelector('#lista-tarefas');
if (localStorage.itemNum) {
  itemnum = localStorage.itemNum;
} else {
  itemnum = 1;
}
if (localStorage.itemCinza) {
  itemCinza = localStorage.itemCinza;
} else {
  itemCinza = 'item1';
}
if (localStorage.listaSalva) {
  listaTarefaId.innerHTML = localStorage.listaSalva;
}

function fOrgList() {
  const newList = document.querySelectorAll('.item');
  for (let a = 0; a < newList.length; a += 1) {
    const orgList = newList[a];
    const orgId = a + 1;
    orgList.setAttribute('id', `item${orgId}`);
    orgList.setAttribute('onclick', `fundoCinza('item${orgId}')`);
    orgList.setAttribute('ondblclick', `completedItem('item${orgId}')`);
  }
}

function criaTarefa(li) {
  const item = `item${itemnum}`;
  const lista = document.createElement(li);
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  lista.innerText = textoTarefa;
  lista.setAttribute('onclick', `fundoCinza('${item}')`);
  lista.setAttribute('id', item);
  lista.setAttribute('class', 'item');
  lista.setAttribute('ondblclick', `completedItem('${item}')`);
  itemnum += 1;

  const create = document.querySelector('ol');
  create.appendChild(lista);
  document.querySelector('#texto-tarefa').value = '';
}

// eslint-disable-next-line no-unused-vars
function fundoCinza(item) {
  const itemAnterior = document.getElementById(itemCinza);
  itemAnterior.setAttribute('style', 'background-color: ;');
  const itemList = document.getElementById(item);
  itemList.setAttribute('style', 'background-color: gray;');
  itemCinza = item;
}

// eslint-disable-next-line no-unused-vars
function completedItem(completedId) {
  const itemList = document.getElementById(completedId);
  const itemClass = itemList.className;
  if (itemClass === 'completed' || itemClass === 'item completed') {
    itemList.setAttribute('class', 'item');
  } else {
    itemList.setAttribute('class', 'item completed');
  }
}

// eslint-disable-next-line no-unused-vars
function limpaLista() {
  const div = listaTarefaId;
  div.innerHTML = '';
  itemnum = 1;
}

// eslint-disable-next-line no-unused-vars
function removerFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let a = 0; a < finalizados.length; a += 1) {
    listaTarefaId.removeChild(finalizados[a]);
    itemnum -= 1;
  }
  fOrgList();
}

function salvarLista() {
  const listaUser = listaTarefaId.innerHTML;
  localStorage.setItem('listaSalva', listaUser);
  localStorage.setItem('itemCinza', itemCinza);
  localStorage.setItem('itemNum', itemnum);
}

function moverCima() {
  const subir = document.getElementById(itemCinza);
  const numId = itemCinza[4];
  console.log(numId);
  if (numId == 1) {
    alert('Esse ja é o primeiro item');
  } else {
    const itemAcima = `item${numId - 1}`;
    const descer = document.getElementById(itemAcima);
    const listaForm = document.getElementById('lista-tarefas');
    listaForm.insertBefore(subir, descer);
    fOrgList();
    itemCinza = itemAcima;
  }
}

// eslint-disable-next-line max-lines-per-function
function moverBaixo() {
  const quantItens = document.querySelectorAll('.item').length;
  const descer = document.getElementById(itemCinza);
  let numId = itemCinza[4];
  console.log(numId);
  if (numId == quantItens) {
    alert('Esse ja é o ultimo item');
  } else {
    numId = parseInt(numId, 10);
    const itemBaixo = `item${numId + 1}`;
    const subir = document.getElementById(itemBaixo);
    const listaForm = listaTarefaId;
    listaForm.insertBefore(subir, descer);
    fOrgList();
    itemCinza = itemBaixo;
  }
}

// eslint-disable-next-line no-unused-vars
function removerSelecionado() {
  const selecionado = document.getElementById(itemCinza);
  listaTarefaId.removeChild(selecionado);
  itemCinza = 'item1';
  itemnum -= 1;
  fOrgList();
}
