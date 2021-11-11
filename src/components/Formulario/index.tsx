import React ,{useState, FormEvent}from 'react';
//import {Formik, validateYupSchema} from 'formik';
import{useHistory} from 'react-router-dom';
//import { TextField } from '../TextField';
//import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';
import api from '../../services/api';
import './formulari.css'



export const Registro = () =>{
// const validationConteudo = Yup.object().shape({
//   nome: Yup.string().required("O nome não pode ser em branco"),
//   telefone: Yup.string().required(),
//   endereco: Yup.string().required(),
//   email: Yup.string().email('Formato inválido').required('Required'),
//   senha: Yup.string().required(),
//   senha2: Yup.string().oneOf([Yup.ref('senha'), null], 'Senha diferentes'),
// });
    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const history = useHistory();

    function handleCreateClass(e: FormEvent){

        e.preventDefault(); 
          if(senha === senha2){
            api.post('/organizador',{
            nome,
            telefone,
            endereco,
            email,
            senha,
            }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/')
          }).catch(() => {
              if(nome === ""){
                alert('campo nome é obrigatório')
              }
              if(telefone === ""){
                alert('campo Telefone é obrigatório')
              }
              if(endereco === ""){
                alert('campo endereço é obrigatório')
              }
              if(email.indexOf("@")){
                
                alert('Email invalido')
              }      
          })
          }else{
              alert('senhas diferentes');
          }
    }
  return (
        <form  onSubmit={handleCreateClass} className="teste">
          <div className=" form-row">
              <div className="col-md-6">
            <Form.Group >
              <Form.Control
                data-testid="form-field"
                placeholder="Nome"
                type="text"
                name="nome"
                value={nome}
                onChange={(e) =>{setName (e.target.value)}}
              />       
            </Form.Group>
             </div>
             <div className="col-md-6">
            <Form.Group>
              <Form.Control
                data-testid="form-field"
                type="text"
                placeholder="Telefone"
                name="telefone"
                value={telefone}
                onChange={(e) =>{setTelefone (e.target.value)}}
              />
            </Form.Group>
            </div>
           </div>
           <div className="form-group">
            <Form.Group>
              <InputGroup >
                <Form.Control
                  data-testid="form-field"
                  type="text"
                  placeholder="Endereço"
                  aria-describedby="inputGroupPrepend"
                  name="endereco"
                  value={endereco}
                  onChange={(e) =>{setEndereco (e.target.value)}}
                />
              </InputGroup>
            </Form.Group>
            </div>
            <div >
            <Form.Group>
              <Form.Control
                data-testid="form-field"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) =>{setEmail (e.target.value)}}
              />
            </Form.Group>
            </div> 
            <div className="form-row">
              <div className="col-md-6 formi-group">
                <Form.Group>
                  <Form.Control
                    data-testid="form-field"
                    id="digiteSenha"
                    type="password"
                    placeholder="senha"
                    name="senha" 
                    value={senha}
                    onChange={(e) =>{setSenha (e.target.value)}}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
            <Form.Group>    
              <Form.Control
                data-testid="form-field"
                id="confirmesenha"
                type="password"
                placeholder="Comfirme a Senha"
                name="senha2"
                value={senha2}
                onChange={(e) =>{setSenha2 (e.target.value)}}
                />
            </Form.Group>
            </div>
          </div>
          <button name="login" data-testid="form-btn" id="login" className="btn btn-block login-btn" type="submit">Cadastrar</button>
        </form>
  );
}
