// velocidade maxima até 70
// cada 5km acima do limite > 1 ponto na carteira
//math.Floor
//caso pontos maior que 12 > "carteira suspendida"
vV(100)



function vV (velocidade) {
    const Vmax = 70;
    const kponto= 5;
    if (velocidade <=Vmax)
    console.log('ok');
else {
    const pontos =  Math.floor(velocidade - Vmax)/kponto;
if (pontos >= 12)
    console.log('carteira suspensa')
    else
console.log ('Pontos',pontos)

}

}





