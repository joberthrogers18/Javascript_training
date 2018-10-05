"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//* -- criar carros *
var carroA = new Carro_1.default("Dogge", 4);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("cerato", 4);
//* motar lista de carros da concessionaria *
var listaCarros = [carroA, carroB, carroC];
var consecionaria = new Concessionaria_1.default("Qsb 08", listaCarros);
console.log(consecionaria.mostrarListaCarro());
var pessoa1 = new Pessoa_1.Pessoa("Jose", "Veloster");
//console.log(pessoa1.dizerCarroPreferido())
consecionaria.mostrarListaCarro().map(function (carro) {
    if (carro['modelo'] == pessoa1.dizerCarroPreferido()) {
        pessoa1.comprarCarro(carro);
    }
});
console.log(pessoa1.dizerCarroQueTem());
