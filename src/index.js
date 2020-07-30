import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cadastrovideo from './components/pages/cadastros/videos'
import Cadastrocategoria from './components/pages/cadastros/categoria';

const pagina404 =() => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={Cadastrovideo} />
      <Route path="/cadastro/categoria" component={Cadastrocategoria} />
      <Route path="/"component={home} exact />
      <Route component={ pagina404 }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
