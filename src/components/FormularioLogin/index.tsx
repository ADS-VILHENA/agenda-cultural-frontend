import React,{FormEvent, useState}from 'react';
//import {Formik} from 'formik';
import { NavLink, useHistory} from 'react-router-dom';
//import { TextField } from '../TextField';
//import * as Yup from 'yup';
//import FloatingLabel from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';
import api from '../../services/api';
import './formulario.css';

export const LoginUsuario = () =>{
    const [email, setEmail] = useState('');
     const [senha, setSenha] = useState('');
     const history = useHistory();
     
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
            api.post('/organizador/login',  {
            email,
            senha,
            }).then(config => {
                    localStorage.setItem('token', config.data.token)
                    history.push('/Categorias') 
            }).catch(() =>{
                    alert('Usuário ou senha incorretos!')
                }
            )
    }
  return (
    <form noValidate  onSubmit={handleSubmit} className="teste">
          <div className=" form-row">
           </div>
            <div className="form-row">
              <div className="col-md-6 form-group">
                <Form.Group>
                  <Form.Control
                    data-testid="form-field"
                    id="digiteSenha"
                    type="text"
                    placeholder="Email"
                    name="email" 
                    value={email}
                    onChange={(e) =>{setEmail (e.target.value)}}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 form-group">
            <Form.Group>    
              <Form.Control
                data-testid="form-field"
                type="password"
                placeholder="Senha"
                name="senha"
                value={senha}
                onChange={(e) => {setSenha (e.target.value)}}
                />
            </Form.Group>
            </div>
          </div>
          <button name="login" data-testid="form-btn" id="login" className="btn btn-block login-btn" type="submit">Login</button>
          <NavLink to="/Criar">Criar Conta</NavLink>
        </form>
  );
}