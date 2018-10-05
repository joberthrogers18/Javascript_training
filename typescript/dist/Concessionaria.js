"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarro = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De segunda a sexta de 08:00 as 18:00 e sabado de 08:00 as 12:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
