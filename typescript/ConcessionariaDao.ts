import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'Tb Concessionarias    '

    inserir(object: Concessionaria): boolean{
        console.log('logica insert')
        return true;
    }
    atualizar(object: Concessionaria): boolean{
        console.log('logica atualizar')
        return true;
    }
    remover(id: number): Concessionaria{
        console.log('logica remover')
        return new Concessionaria('',[]);
    }
    selecionar(id: number): Concessionaria{
        console.log('logica select')
        return new Concessionaria('',[]);
    }
    selecionar_todos(): [Concessionaria]{
        console.log('logica getAll')
        return [new Concessionaria('',[])];
    }
}