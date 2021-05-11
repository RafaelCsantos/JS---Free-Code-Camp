// criar a função somar que retorna a
// soma de todos os múltiplos de 3 e 5

let soma=0;
 somar(10);


 function somar (limite) { 
    soma=0;
    for (i=0; i<= limite; i++)
     if (i%3===0 || i%5 ===0) 
     soma=soma+i;
}
 console.log(soma);
