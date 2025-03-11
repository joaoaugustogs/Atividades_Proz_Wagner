
let listaDeCompras = [];


function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`"${item}" foi adicionado à lista.`);
}

function removerItemPeloNome(nome) {
    const index = listaDeCompras.indexOf(nome);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`"${nome}" foi removido da lista.`);
    } else {
        console.log(`"${nome}" não foi encontrado na lista.`);
    }
}

function removerItemPelaPosicao(posicao) {
    if (posicao >= 0 && posicao < listaDeCompras.length) {
        const itemRemovido = listaDeCompras.splice(posicao, 1);
        console.log(`"${itemRemovido[0]}" foi removido da lista.`);
    } else {
        console.log("Posição inválida.");
    }
}

function pesquisarPorNome(nome) {
    if (listaDeCompras.includes(nome)) {
        console.log(`"${nome}" está na lista.`);
    } else {
        console.log(`"${nome}" não foi encontrado na lista.`);
    }
}

function pesquisarPorPosicao(posicao) {
    if (posicao >= 0 && posicao < listaDeCompras.length) {
        console.log(`O item na posição ${posicao} é: "${listaDeCompras[posicao]}"`);
    } else {
        console.log("Posição inválida.");
    }
}

function exibirLista() {
    if (listaDeCompras.length > 0) {
        console.log("Lista de Compras:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else {
        console.log("A lista de compras está vazia.");
    }
}


adicionarItem("Arroz");
adicionarItem("Feijão");
adicionarItem("Leite");
exibirLista();

removerItemPeloNome("Feijão");
exibirLista();

pesquisarPorNome("Arroz");
pesquisarPorNome("Macarrão");

removerItemPelaPosicao(1);
exibirLista();

pesquisarPorPosicao(0);
