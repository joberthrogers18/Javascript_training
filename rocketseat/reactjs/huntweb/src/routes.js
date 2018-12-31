import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/products';

//BrowserRouter vai definir que estamos usando rotas a partir de um browser
//Switch ele vai permiti que apenas um componente seja chamada ao mesmo tempo 

const Routes = () => (
    <BrowserRouter> 
         <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
         </Switch>
    </BrowserRouter>
);

export default Routes;