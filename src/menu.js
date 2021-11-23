function abrirMenu(){
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function filtro(){
    var itemBusca = document.querySelectorAll('li.itemBusca');
    for (var i = 0; i < itemBusca.length; i++){
        itemBusca[i].classList.toggle("abrirFiltro");
    }
    document.getElementById("itensBusca").classList.toggle("abrirFiltro");
}

function teclando(){
    var texto = document.getElementById("txtBusca");
    var filtro = texto.value.toUpperCase();
    var lista = document.getElementById("itensBusca");
    var itens = lista.getElementsByTagName("li");
    for (var i = 0; i < itens.length; i++){
        if (itens[i].innerText.toUpperCase().indexOf(filtro) == 0){
            itens[i].style.display = "";
        } else{
            itens[i].style.display = "none";
        }
    }
}
