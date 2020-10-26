import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import teste from '../../assets/LogoMatheus/AgendaCultural.png'
import './agenda.css';
import PageHeader from '../../components/Header';
import PageMenu from '../../components/MenuLateral';
import { maxHeaderSize } from 'http';

function PageAgenda(){
    
        return (
            <div>
                <div>
                    <PageHeader />
  
                </div>
                <div>
                    <PageMenu />
                </div>
                <div className="titulo_evento">Esses são seus eventos:</div>
                
                <main className="page_main"> 
                
                    <div className="card_pad ">
                      
                        <div className="card card_border" style={{width: '30rem' }}>
                            <img className="card-img-top card_border_img" src={teste} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/DadosEventos"><a href="#" className="btn btn-lght">Ver Mais</a></Link>
                                
                                <button className="btn btn-danger">Deletar Evento</button>
                            </div>
                        </div>
                        
                        <div className="card card_m card_border" style={{width: '30rem'}}>
                            <img className="card-img-top card_border_img" src={teste} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/DadosEventos"><a href="#" className="btn btn-lght">Ver Mais</a></Link>
                                <button className="btn btn-danger">Deletar Evento</button>
                            </div>
                        </div>
                        <div className="card card_m card_border" style={{width: '30rem'}}>
                            <img className="card-img-top card_border_img" src={teste} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Titulo</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/DadosEventos"><a href="#" className="btn btn-lght">Ver Mais</a></Link>
                                <button className="btn btn-danger">Deletar Evento</button>
                            </div>
                        </div>
                    </div>
                </main> 
            </div>
        )
    }

export default PageAgenda;
