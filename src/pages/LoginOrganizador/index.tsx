import React, { FormEvent, useState } from 'react'
import{useHistory} from 'react-router-dom'
import '../../assets/styles/global.css';
import PageLongin from '../../components/PageLoginImg';
import { Link} from 'react-router-dom'
import './Organizador.css';
import api from '../../services/api';

function Organizador() {
    
    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const history = useHistory();
    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        if(senha == senha2){
            api.post('/organizador', {
            nome,
            telefone,
            endereco,
            email,
            senha,
            }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro!');
        })
        }else{
            alert('senhas diferentes');
        }
    }

    return(
        <div id="root">
            <main id="page-login">
                <div className="container">
                    <div id="page-description" className="row no-gutters">
                       <PageLongin />
                        <form className="container_form" onSubmit={handleCreateClass}>              
                            <p>
                                <label >Nome: </label>
                                <input name="nome" type="text" size={100}  className="form-control" value={nome} onChange={(e) =>{setName (e.target.value)}}/>
                            </p>
                            <p>
                                <label >Telefone: </label><br></br>
                                <input name="telefone" type="text" size={100} placeholder="DDD + Número (somente números)" className="form-control" value={telefone} onChange={(e) =>{setTelefone (e.target.value)}}/>
                            </p>
                            <p>
                                <label >Endereço: </label><br></br>
                                <input name="endereco" type="text" size={100} className="form-control" value={endereco} onChange={(e) =>{setEndereco (e.target.value)}}/>
                            </p>
                            <p>
                                <label >Email: </label><br></br>
                                <input name="email" type="text" size={100}  className="form-control" value={email} onChange={(e) =>{setEmail (e.target.value)}}/>
                            </p>
                            
                            <p>
                                <label >Senha: </label><br></br>
                                <input name="senha" type="password" size={100} placeholder="****************" className="form-control" value={senha} onChange={(e) =>{setSenha (e.target.value)}}/>
                            </p>
                            <p>
                                <label >Confirme sua senha: </label><br></br>
                                <input name="senha2" type="password" size={100} placeholder="****************" className="form-control" value={senha2} onChange={(e) =>{setSenha2 (e.target.value)}} />
                            </p>
                            <p>
                                <button type="submit">Criar</button>
                            </p>
                            <p>
                                <Link to="/">Já tenho conta</Link>
                            </p>
                        </form>
                    </div>   
                </div>
            </main>
        </div>
    )
}

export default Organizador;