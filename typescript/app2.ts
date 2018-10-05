class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number

    constructor(modelo: string, numeroDePortas: number) { 
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = 0
     }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any // qualquer tipo de dado

    constructor(endereco: string) { 
        this.endereco = endereco;
     }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarListaCarro(): any {
        return this.listaDeCarros
    }

}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) { 
        this.nome = nome;
        this.carroPreferido = carroPreferido;
     }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro: any): void{
        this.carro = carro;
    }

    public dizerCarroQueTem(): any{
        return this.carro;
    }

}
