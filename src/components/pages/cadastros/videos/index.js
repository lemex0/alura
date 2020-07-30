import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../Page Default';

function Cadastrovideo() {
    return(
      <PageDefault>
        <h1>Cadastro de Video</h1>

        <Link to= "/cadastro/categoria">
            Cadastro categoria
        </Link>
      </PageDefault>
    )  
  }
export default Cadastrovideo;


