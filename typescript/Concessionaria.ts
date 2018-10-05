 import Carro from './Carro'
 import {ConcessionarioInterface} from './ConcecionarioInterface';

 export default class Concessionaria implements ConcessionarioInterface{
    private endereco: string
    private listaDeCarros: Array<Carro> // qualquer tipo de dado

    constructor(endereco: string, listaCarros: Array<Carro>) { 
        this.endereco = endereco;
        this.listaDeCarros = listaCarros
     }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarListaCarro(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string{
        return 'De segunda a sexta de 08:00 as 18:00 e sabado de 08:00 as 12:00'
    }

}