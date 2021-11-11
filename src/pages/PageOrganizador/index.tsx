//import axios from 'axios';
import React, { useState } from 'react'
import PageHeader from '../../components/Header';
import PageMenu from '../../components/MenuLateral';
import PageFooter from '../../components/Footer/footer';
import PageTitulo from '../../components/Titulo';
//import api from '../../services/api';
import './organizador.css'

function Pageorganizador(){

    

    // const [nome, setName] = useState('');
    // const [telefone, setTelefone] = useState('');
    // const [endereco, setEndereco] = useState('');
    // const [email, setEmail] = useState('');

    return(
    <div>
      <div>
        <PageHeader />
      </div>
      <div className="hh">
        <PageMenu />
      </div>
      <div>
        <PageTitulo title="Meus Dados"/>
      </div>
      <main className="main_evento">    
          <form className="form_border">
              <div className="form-group">
                  <label className="form_label">Nome</label>
                  <input type="text" className="form-control form_input"/>
              </div>
              <div className="form-group">
                  <label className="form_label">Telefone</label>
                  <input name="telefone" type="text" className="form-control form_input" />
              </div>
              <div className="form-group">
                  <label className="form_label">Endereço</label>
                  <input name="endereco" type="text" className="form-control form_input"placeholder="Ex: Rua A, n° 000, Bairro"/>
              </div>
              <div className="form-group">
                  <label className="form_label">Email</label>
                  <input name="endereco" type="text" className="form-control form_input"/>
              </div>
          </form>
             <button className="btn_event">Salvar</button>
             <button className="btn_event">Cancelar</button> 
      </main>
      <div >
        <PageFooter/>
      </div>
  </div>
    )
}
export default Pageorganizador ;