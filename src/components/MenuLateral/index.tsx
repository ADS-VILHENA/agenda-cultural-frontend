import { clear } from 'console';
import React, { FormEvent } from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api';
import './menu.css'

function PageMenu(){

    const history = useHistory();

    function handleLogout(){
            api.post('organizador/logout', {
                
            }).then(() => {
                history.push('/')
            }).catch(() => {
                alert('Ocorreu um erro ao sair!');
            })
        }
    return(
        
        
        <div>
        <nav id="menu" className="menu_l">
            <ul>
                <Link to="/Agenda"><li><a>Inicio</a></li></Link>
                <Link to="/Eventos"><li><a>Eventos</a></li></Link> 
                    {/* <ul>
                        <li><a href="">Criar</a></li>
                        <li><a href="">Alterar</a></li>
                    </ul> */}
                <Link to="/Categorias"><li><a>Categorias</a></li></Link>
                <Link to="/organizador"><li><a>Organizador</a></li></Link>
                <button className="header_top_button" type="button" onClick={() => handleLogout()}>Sair</button>
            </ul>
        </nav>
        
        
      </div>
    )
}
export default PageMenu;