//Criando função para agregar o nome dos amigos
let amigos = []

function adicionarAmigo() {
    let nomes = document.querySelector('input').value;
    if (nomes == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomes);
        document.querySelector('input').value = '';
    }
} 

// Criando função para atualizar a lista de amigos
function atualizarAmigos(){
let lista = document.querySelector("#listaAmigos");
lista.innerHTML = '';

for (let i = 0; i < amigos.length; i++) {
  let itemListaAmigos = document.createElement('li');
  itemListaAmigos.textContent = amigos[i];
  lista.appendChild(itemListaAmigos);
  }
}

//Criando função para o amigo sorteado
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.querySelector('#resultado').innerHTML = 'O amigo sorteado foi:' + amigoSorteado;

}