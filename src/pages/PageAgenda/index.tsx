import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import teste from '../../assets/LogoMatheus/AgendaCultural.png'
import './agenda.css';
import '../../assets/styles/global.css';
import PageHeader from '../../components/Header';
import PageMenu from '../../components/MenuLateral';
import PageFooter from '../../components/Footer/footer';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup'
//import { maxHeaderSize } from 'http';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
//import axios from 'axios';
import PageTitulo from '../../components/Titulo';
export default class PageAgenda extends Component{
    
  // componentDidMount(){
  //   const config ={
  //     headers:{
  //       Authorization: 'Bearer' + localStorage.getItem('token')
  //     }
  //   }
  // }
  render(){
        return (
            <div>
                <div>
                    <PageHeader />
                </div>
                <div className="hh">
                    <PageMenu />
                </div>
                <div>
                  <PageTitulo title="Eventos"/>
                </div>
                <div>
                  <h1 className="main_h1_Sub">Últimos Eventos Cadastrados</h1>
                </div>
                <main className="page_main_agenda"> 
                <div className="card_pad">
                  {/* essa parte cuida do card da pagina inicial */}
                    <Row xs={1} md={3} className="">
                      {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                      <div className="card card_m card_border" style={{width: '20rem'}}>
                          <img className="card-img-top card_border_img" src={teste} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/DadosEventos" className="btn btn-lght">Ver Mais</NavLink>
                                {/* <Link to="/DadosEventos"><a href="#" className="btn btn-lght">Ver Mais</a></Link> */}
                              <button className="btn btn-danger ml-5">Deletar Evento</button>
                            </div>
                          </div>
                    </Col>
                    ))}
                  </Row>      
                </div>
                </main> 
                <div >
                  <PageFooter/>
                </div>
                
            </div>
            
        )
    }
  }

