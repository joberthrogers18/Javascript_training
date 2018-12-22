console.log('Exercício 1');
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        console.log(this.admin);
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('teste@gmail.com', 'senha123');
const Admin1 = new Admin('admin@gmail.com', 'senha123');

User1.isAdmin();
Admin1.isAdmin();

console.log('Exercício 2');

const usuarios = [
    {nome: 'Jobs', idade: 23, empresa: 'Vagabounds'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

let map = usuarios.map(function(item){
    return item.idade;
});

console.log(`idade dos meus brothes ${map}`);

let filter = usuarios.filter(function(item){
    return item.idade >= 18 && item.empresa === 'Rocketseat';
});

console.log('Usando o Filter' + filter);

let find = usuarios.find(item => item.empres === 'Google');

console.log(`Usando o find atrás de alguém que trabalhe no google ${find}`);

let resultadoUsuarios = usuarios.map(function(item){
    item.idade *= 2;
    return item;
})

resultadoUsuarios = resultadoUsuarios.filter(function(item){
    return item.idade < 50;
});

console.log(resultadoUsuarios);


console.log('Exercício 3');

// 3.1

const arr = [1,2,3,4,5];

const newArray = arr.map(item => item + 10);

console.log(newArray);

//3.2

const usuario2 = {nome: 'Jobs', idade: 20};

const mostrarIdade = ({idade}) => idade;

console.log(mostrarIdade(usuario2));

//3.3

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18)  =>  ( {nome, idade} );

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4

const promise = () => new Promise((resolve, reject) => resolve()); 

console.log("Exercício 4");

//REST

const empresa = {
    nome1: 'Rocketseat',
    endereco1:{
        cidade1: 'Rio do SUl',
        estado1: 'SC',
    }
};

const {nome1, endereco1:{cidade1, estado1}} = empresa;

console.log(nome1);
console.log(cidade1);
console.log(estado1);

// 4.2

function mostraInfo({nome2, idade2}){
    return `${nome2} tem ${idade2} anos.`;
}

console.log(mostraInfo({nome2: 'Jobs',idade2: 88}));

console.log("Exercício 5");

const arr2 = [1,2,3,4,5,6];

const [x, ...y] = arr2;

console.log(x);
console.log(y);

function soma1(...numbers){

    return numbers.reduce(function(total, next){
         return  total + next;
         
    });
}

console.log(soma1(6,5,4,3,2,1));

//SPREAD

const usuario3 = {
    nome: 'Jobs',
    idade: 25,
    endereco: {
        cidade: 'Rios do Sul',
        uf: 'SC',
        país: 'Brasil',
    }
};

const usuario4 = {...usuario3, nome: 'Gabriel'};

console.log(usuario4);

const usuario5 = {...usuario3, endereco:{...usuario3.endereco, cidade: 'Lontras'}};

console.log(usuario5);

console.log('Exercício 6');

const user = 'Jobs';
const idadeUser = 20;

console.log(`O usuário ${user}  possui ${idadeUser} anos!`);

console.log('Exercício 7');

const name = "Diego";
const age = 23;

const us = {
  name,
  age,
  city: "Rio do Sul"
};

console.log(us);
