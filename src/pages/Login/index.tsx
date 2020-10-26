import React, { FormEvent, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import './login.css';
import '../../assets/styles/global.css';
import PageLongin from '../../components/PageLoginImg';
import api from '../../services/api';
import cookie from 'react-cookie'


function Login() {


     const [email, setEmail] = useState('');
     const [senha, setSenha] = useState('');

     const history = useHistory();
     
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        
            api.post('/organizador/login',  {
            email,
            senha,
            }).then(() => {
                history.push('/Categorias')
            })
            // .then(resp => console.log(resp))
            
            
               
            // 
    }
    return ( 
      
        <div id="root" >
            <main id="page-login">
                <div className="container">
                    <div id="page-description" className="row no-gutters">
                        <PageLongin />
                       
                            <form className="container_form2"  onSubmit={handleSubmit}>               
                                <p>
                                    <label >Email: </label><br></br>
                                    <input type="text" name="email" size={100} placeholder="exemplo@gmail.com" className="form-control" value={email} onChange={(e) =>{setEmail (e.target.value)}}/>
                                </p>
                                <p>
                                    <label >Senha: </label><br></br>
                                    <input type="password" name="senha" size={100} placeholder="****************" className="form-control" value={senha} onChange={(e) =>{setSenha (e.target.value)}}/>
                                </p>
                                <p>
                                    <button type="submit" >Entrar</button>
                                </p>
                                <p >
                                    <h2 >Não tem conta?</h2>
                                    <Link to="/Criar">Criar conta</Link>
                                </p>
                            </form>
                    </div>   
                </div>
            </main>
        </div>
        
    )
}    
export default Login;