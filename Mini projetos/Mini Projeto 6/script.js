//criar um método pra ler propriedades de um objeto
//exibir somente as propriedades dos strings

const filme = {
    titulo : "juno",
    ano: 2004,
    diretor : "Jonze",
    personagem: "Abc"

}


exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (i in obj)
        if (typeof obj[i] === 'string')
            console.log(i,obj[i])
}