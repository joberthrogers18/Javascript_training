import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('veloster', 3);

let moto = new Moto('Hornet');

let concessionaria = new Concessionaria('',[])

moto.acelerar()

console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorariosDeFuncionamento())