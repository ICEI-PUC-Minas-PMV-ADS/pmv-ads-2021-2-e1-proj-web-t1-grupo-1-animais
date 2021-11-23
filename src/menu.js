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
