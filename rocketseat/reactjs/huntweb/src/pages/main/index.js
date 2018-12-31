import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component{
    state = { //No react não existe variaveis e sim estados
        products: [],

    } // com o state a qualquer modificação de uma variavel ai dentro o render já atualiza

    componentDidMount(){ //Metodo que é executado assim que o componente é executado em tela
        this.loadProducts();
    }
    
    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    };

    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product => {
                    return <h2 key={product._id}>{product.title}</h2>
                })}
            </div>
        )
    }
}