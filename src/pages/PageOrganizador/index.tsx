import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/Header';
import PageMenu from '../../components/MenuLateral';
import api from '../../services/api';
import './organizador.css'

function Pageorganizador(){

    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');


    function handleExibir(e: FormEvent){
        e.preventDefault();
        api.post('organizador', {
            nome,
            telefone,
            endereco,
            email,
        }).then(() => {
            alert('Cadastro alterado com sucesso!');
        }).catch(() => {
            alert('Erro de alteração!');
        })
    }
    return(
        <div>
            <div>
                <PageHeader />
            </div>
            <div>
                <PageMenu />
            </div>
            <main id="page-evento3" className="page_main_even3">  
                
                <fieldset>
                    <legend>Meus Dados</legend>
                    <form className="form">
                        <p>
                            <label htmlFor="">Nome:</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label htmlFor="">Telefone:</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label htmlFor="">Endereço:</label> 
                            <input type="text" />
                        </p>
                        <p>
                            <label htmlFor="">Email:</label> 
                            <input type="text" />
                        </p>
                        
                        
                    </form> 
                      
                    <button className="btn_evento">Salvar</button>
                    <button className="btn_evento">Cancelar</button>                
                </fieldset>    
            </main>
            </div>
    )
}

export default Pageorganizador;