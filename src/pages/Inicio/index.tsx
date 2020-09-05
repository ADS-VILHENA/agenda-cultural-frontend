import React from 'react';
import {Link} from 'react-router-dom';
import imgta from '../../assets/LogoMatheus/LogoMatheus.png';
import './inicio.css';
import PageHeader from '../../components/Header';

function PageInicio() {
    return (
        <div>
            <PageHeader />
            <main className="page_main page_main_top"> 
                <div className="">
                <section >
                    <div className=" row">
                        <div className="col-sm-6">
                            <div>
                                <div className="card-body page_main_block ">
                                    <Link to="/Eventos">
                                        <h5 className="card-title"> Cadastrar Eventos</h5>
                                        <p className="card-text"></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div>
                                <div className="card-body page_main_block">
                                    <Link to="/Categorias">
                                        <h5 className="card-title">Categorias</h5>
                                        <p className="card-text"></p> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div>
                                <div className="card-body page_main_block">
                                    <Link to="/organizador">
                                        <h5 className="card-title">Organizadores</h5>
                                        <p className="card-text"></p> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <div className="card-body page_main_block">
                                    <Link to="/Agenda">
                                        <h5 className="card-title">Agenda</h5>
                                        <p className="card-text"></p> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                </section>
            </div> 
            
            </main>
            <footer>
              
            </footer>
        </div>
    )
}

export default PageInicio;