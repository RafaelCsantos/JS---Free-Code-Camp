function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {

    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar : function() {
            console.log("fazendo ligação...");
        // marcaCelular, é possível omitir quandos os nomes forem iguais:
        // tamanhoTela,
        // capacidadeBateria,
        }
    }

}


const celular1 = criarCelular('zenfone',5.5,5000);
console.log (celular1);


