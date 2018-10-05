import Carro, {} from "./Carro";
import {Pessoa} from "./Pessoa";
import Concessionaria from "./Concessionaria"

//* -- criar carros *

let carroA = new Carro("Dogge", 4)
let carroB = new Carro("Veloster", 3)
let carroC = new Carro("cerato", 4 )

//* motar lista de carros da concessionaria *

let listaCarros: Array<Carro> = [carroA, carroB, carroC]

let consecionaria = new Concessionaria("Qsb 08", listaCarros)

console.log(consecionaria.mostrarListaCarro())

let pessoa1 = new Pessoa("Jose","Veloster")

//console.log(pessoa1.dizerCarroPreferido())
consecionaria.mostrarListaCarro().map((carro: Carro) => {
    if(carro['modelo'] == pessoa1.dizerCarroPreferido()){
        pessoa1.comprarCarro(carro)
    }
})

console.log(pessoa1.dizerCarroQueTem())


