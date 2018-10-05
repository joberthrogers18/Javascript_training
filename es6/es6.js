/*const serie = 'Friends'

if(true){
    let serie = 'Game of Thrones'
    console.log(serie)
}

console.log(serie)*/

var dobroDoValor = numero => { //arrow function para um parametro
    return numero * 2;
};

var SomaDosValores = (numero, numero2) => { //arrow function para dois parametros
    return numero + numero2;
};

var retornaValor = () => { //arrow function quando não tem nenhum parametro
    return 3;
};

var quadrado = numero => numero * numero; // quando a função eh simples e só tem o retorna pode fazer assim

console.log(dobroDoValor(2))

console.log(SomaDosValores(3,2))

console.log(retornaValor())

console.log(quadrado(5))