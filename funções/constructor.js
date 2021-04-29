function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {

    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar : function() {
            console.log("fazendo ligação...");
       
        }
    }

}
//pascal case
function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
this.marcacelular=marcaCelular,
this.tamanhotela=tamanhoTela,
this.capacidadebateria=capacidadeBateria,
this.ligar = function () {
    console.log ("Fazendo ligação...");
}
}

const celular = new Celular('Asus',5.5,5000);
console.log(celular);


