import React from 'react'
import '../../assets/styles/global.css';
import PageLongin from '../../components/PageLoginImg';
import { Link} from 'react-router-dom'
import './Organizador.css';

function Organizador() {
    return(
        <div id="root">
            <main id="page-login">
                <div className="container">
                    <div id="page-description" className="row no-gutters">
                       <PageLongin />
                        <form className="container_form">               
                            <p>
                                <label >Usuario: </label><br></br>
                                <input type="text" size={100} placeholder="exemplo@gmail.com" className="form-control"/>
                            </p>
                            <p>
                                <label >Email: </label><br></br>
                                <input type="text" size={100} placeholder="exemplo@gmail.com" className="form-control"/>
                            </p>
                            <p>
                                <label >Senha: </label><br></br>
                                <input type="password" size={100} placeholder="****************" className="form-control"/>
                            </p>
                            <p>
                                <label >Confirme sua senha: </label><br></br>
                                <input type="password" size={100} placeholder="****************" className="form-control"/>
                            </p>
                            <p>
                                <button >Criar</button>
                            </p>
                            <p >
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