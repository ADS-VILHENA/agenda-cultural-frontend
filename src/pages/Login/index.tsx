import React from 'react';
import {Link} from 'react-router-dom'
import './login.css';
import '../../assets/styles/global.css';
import PageLongin from '../../components/PageLoginImg';
function Login() {
    return (
        
        <div id="root" >
            <main id="page-login">
                <div className="container">
                    <div id="page-description" className="row no-gutters">
                        <PageLongin />
                        <form className="container_form2">               
                            <p>
                                <label >Email: </label><br></br>
                                <input type="text" size={100} placeholder="exemplo@gmail.com" className="form-control"/>
                            </p>
                            <p>
                                <label >Senha: </label><br></br>
                                <input type="password" size={100} placeholder="****************" className="form-control"/>
                            </p>
                            <p>
                                <Link to="/Inicio"><button >Entrar</button></Link>
                            </p>
                            <p >
                                <h1>Não tem conta?</h1>
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