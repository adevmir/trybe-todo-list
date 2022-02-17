function criaTarefa(li) {
    const lista = document.createElement(li);
    const textoTarefa = document.querySelector('#texto-tarefa').value;
    lista.innerText = textoTarefa;

    var create = document.querySelector('ol');
    create.appendChild(lista);
}