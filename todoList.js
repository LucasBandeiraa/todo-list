var itens = "";
var contador = 0;

function apertar(){
    var info = document.getElementById("iten").value;
    document.getElementById("iten").value ="";
    
    itens += `<li class="list-group-item" id="${contador}" onclick="removeItem(this.id)">${info}</li>`
    contador++;
    mostrarItens();
}

function mostrarItens(){
    var lista = document.getElementById("lista");
    lista.innerHTML = itens;
}


function removeItem(id){
    var item = document.getElementById(id);
    item.remove();
}



















