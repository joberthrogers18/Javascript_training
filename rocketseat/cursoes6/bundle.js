"use strict";

// Trabalhando com os arrays

/*const  arr = [1,3,4,5,8,9]

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter( function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);*/
// Arrow Function

/*
const arr = [1,3,4,5,6];

const newArray2 = arr.map(item => item * 2); // arrow function não precisa do function, apenas o parametro, a flecha e o retorno (item*2)

console.log(newArray2);

*/
//Destruturação

/*
const usuario = {
    nome: 'Diego',
    idade : 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome, idade, cidade);

function mostrarNome({nome, idade}){
    console.log(nome, idade);
}

mostrarNome(usuario);*/
//REST

/*const usuario = {
    nome: "Joberth Rogers",
    idade : 20,
    empresa :"VASP"
}

const { nome, ...resto } = usuario; // pega o resto de um objecto que nesse caso uma variavel salvou a idade e a empresa

console.log(nome);
console.log(resto); 

const arr3 = [1,2,3,4,5,6,7,8,9];

const [a,b, ...c] = arr3; // para array;
console.log(a);
console.log(b);
console.log(c);

function soma(...params){   // rest para funções
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6,7,8,9,11));

//SPREAD

const array1 = [1,2,3];
const array2 = [4,5,6]; 

const array3 = [...array1, ...array2];
console.log(array3);

const usuario2 = {...usuario, nome: 'Ana'};

console.log(usuario2);

*/
// TEMPLATE ITERABLE

/*const nome = 'Jobs';
const idade = 20;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`); // com crase eu posso fazer essa trick no ES6;*/
//Short object Syntax
var nome = 'Jobs';
var idade = 20;
var usuario = {
  nome: nome,
  // simplificação do nome em vez de colocar nome: nome
  idade: idade,
  empres: 'VASP'
};
console.log(usuario);
