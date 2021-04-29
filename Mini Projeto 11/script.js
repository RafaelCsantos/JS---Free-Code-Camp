// Objeto Endereço
// criar um objeto enredeço:
//rua
//cidade
//cep
//exibirendereco(endereco)


let endereco = {
    rua: 'a',
    cidade: 'Pinda',
    CEP: '12440440',
}

function exibirEndereco(endereco) {

    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);




