function abrirMenu(){       // Abre o menu hamburguer
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function filtro(){      // Abre e fecha o filtro de pesquisa quando clica
    var itemBusca = document.querySelectorAll('li.itemBusca');
    for (var i = 0; i < itemBusca.length; i++){
        itemBusca[i].classList.toggle("abrirFiltro");
    }
    document.getElementById("itensBusca").classList.toggle("abrirFiltro");
}

function filtro2(){     // Abre o filtro de pesquisa forçosamente (usado na função teclando())
    var itemBusca = document.querySelectorAll('li.itemBusca');
    for (var i = 0; i < itemBusca.length; i++){
        itemBusca[i].classList.toggle("abrirFiltro", false);
    }
    document.getElementById("itensBusca").classList.toggle("abrirFiltro", false);
}

function teclando(){
    filtro2();      // Força o site a abrir a lista de espécies
    var texto = document.getElementById("txtBusca");
    var filtro = texto.value.toUpperCase();
    var lista = document.getElementById("itensBusca");
    var itens = lista.getElementsByTagName("li");
    var notFound = document.getElementById("notFound");
    var counter = 0;
    for (var i = 0; i < itens.length; i++){
        if (itens[i].innerText.toUpperCase().indexOf(filtro) == 0){
            itens[i].style.display = "";
            counter++
        } else{
            itens[i].style.display = "none";
        }
    }
    if (counter == 0){      // Se o input digitado pelo usuário não corresponder a nenhum item da lista de espécies, o item notFound será exibido
        notFound.style.display = "block";
        notFound.style.color = "grey";
        notFound.style.cursor = "default";
    }
}