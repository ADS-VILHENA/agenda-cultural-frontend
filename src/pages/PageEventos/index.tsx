import React from 'react'
import PageHeader from '../../components/Header';
import './eventos.css'

function PageEventos(){
    return(
        <div>
            <div>
                <PageHeader />
            </div>
                <div className="main_titulo ">
                    <h1>Cadastro de Eventos:</h1>
                </div> 
                <section >
                    <div>
                        <form className="testet">
                            <div>
                                <label className="main_formulario_label">Nome do evento:</label><br/>
                                <input type="text" className="main_formulario_input col"/>
                            </div>
                            <div>
                                <label className="main_formulario_label">Data de realização:</label><br/>
                                <input type="date" className="main_formulario_input col"/>
                            </div>
                            <div>
                                <label className="main_formulario_label">Local:</label><br/>
                                <input type="text" className="main_formulario_input col"/>
                            </div>
                            <div>
                                <label className="main_formulario_label">Categoria:</label><br/>
                                <input type="text" className="main_formulario_input col"/>
                            </div>
                            <div>
                                <label className="main_formulario_label">Organizador:</label><br/>
                                <input type="text" className="main_formulario_input col"/>
                            </div>
                            <div>
                                <label className="main_formulario_label">Logo do evento:</label><br/>
                                <input type="file" className="form-control-file main_formulario_input"></input>
                            </div>
                        </form>
                        <div className="main_button_conf">
                            <button type="button" className="btn btn-primary btn-lg main_button">Salvar</button>
                            <button type="button" className="btn btn-secondary btn-lg main_button">Cancelar</button>
                        </div>
                     </div>
                </section>
        </div>
    )
}

export default PageEventos;