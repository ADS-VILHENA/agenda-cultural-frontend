import React, { FormEvent, useState } from 'react';
import {useHistory} from 'react-router-dom';
import './login.css';
// import '../../assets/styles/global.css';
//import PageLongin from '../../components/PageLoginImg';
import api from '../../services/api';
//import cookie from 'react-cookie'
import imagem from '../../assets/LogoMatheus/LogoMatheus.png';
import { LoginUsuario } from '../../components/FormularioLogin';
//import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
// import { login } from '../../services/auth';
//import LoginParaUsuario from '../../components/LoginUsuario/LoginUsuario';


function Login() {
    return ( 
      <div className="d-flex align-items-center min-vh-100 py-3 py-md-0"data-testid="ID_organizador" >
        <div className="container">
          <div className="aling row no-gutters">
            <div className="col-6">
              <img src={imagem} alt="" className="imgLogo3"/>
            </div>
            <div >
            <h5 className="login_Usuario3">Agenda Cultural de Vilhena</h5>
            <h2 className="login_Usuario2">Login</h2>
            <LoginUsuario/>
          </div>
        </div> 
        </div>   
      </div>
    )
}    
export default Login;