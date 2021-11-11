import React, { FormEvent, useState, Component } from 'react'
import{useHistory} from 'react-router-dom';
import * as yup from 'yup';
import './Organizador.css';
import PageLongin from '../../components/PageLoginImg';
import { Link} from 'react-router-dom'
import api from '../../services/api';
import { Formik } from 'formik';
import { Registro } from '../../components/Formulario';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import imagem from '../../assets/LogoMatheus/LogoMatheus.png';
interface FormModel{
  nome: string,
  sobrenome:string,
  email:string,
  senha:string
}
function Organizador() {
    return(
      <div className="d-flex align-items-center min-vh-100 py-3 py-md-0"data-testid="ID_organizador" >
        <div className="container">
          <div className="aling row no-gutters">
            <div className="col-6">
              <img src={imagem} alt="" className="imgLogo"/>
            </div>
            <div >
            <h2 className="login_registro">Registrar conta</h2>
            <Registro/>
          </div>
        </div>
        </div>   
      </div>
     )
}

export default Organizador;