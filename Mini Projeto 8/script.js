//exercicio nota escolar
//obter média a partir de um array
const array = [70,70,80];
//0-59: F
//60-69 :D
//70-79 :c
//80-89 : B
// 90 - 100 : A

function conceito (notas) {
    const media = calcularMedia(notas);
if (media<59) return 'F';
if (media<69) return 'D';
if (media<79) return 'C';
if (media<89) return 'B';
return 'A'
}

function calcularMedia(array) {
let soma=0;
for (let i of array) {
soma=soma+i;
}
return soma/(array.length);
}

console.log(calcularMedia(array));
console.log(conceito(array));
