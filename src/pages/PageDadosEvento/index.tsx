import React  from 'react'
import PageHeader from '../../components/Header';
import './eventos.css'
import PageMenu from '../../components/MenuLateral';
import Form from 'react-bootstrap/Form';
import PageTitulo from '../../components/Titulo';
import PageFooter from '../../components/Footer/footer';


function PageDadosEventos(){
    return(
        <div>
            <div>
                <PageHeader />
            </div>
            <div className="hh">
                <PageMenu />
            </div>
            <div>
                <PageTitulo title="Evento"/>
            </div>
            <main className="main_evento">  
                <form className="form_border">
                    <div className="form-group">
                        <label className="form_label">Nome do Evento</label>
                        <input type="text" className="form-control form_input"/>
                    </div>
                    <div className="form-group">
                        <label className="form_label">Descrição</label>
                        <textarea className="form-control form_input"/>
                    </div> 
                    <div className="form-group">
                        <label className="form_label">Endereço</label>
                        <input name="telefone" type="text" className="form-control form_input" placeholder="Ex: Rua A, n° 000, Bairro "/>
                    </div>
                    <div className="form-group">
                        <label className="form_label">Localização</label>
                        <input name="endereco" type="text" className="form-control form_input"/>
                    </div>

                    <div className="form-row">
                        <div className=" col-md-3">
                            <label htmlFor="" className="form_label">Telefone:</label>
                            <input type="text" className="col-md-9 form-control form_input"/> 
                        </div>
                        <div className=" col-md-3">
                            <label htmlFor=""className="form_label2 top">Hora:</label>
                            <input type="time" className="col-md-9 form-control form_label_sec "/>
                        </div>
                        <div className=" col-md-3">
                            <label htmlFor="" className="form_label2 top">Data:</label>
                            <input type="date" className="col-md-9 form-control form_label_sec"/>
                        </div>
                        <div className=" col-md-3">
                            <label htmlFor="" className="form_label2 top">Categoria:</label>
                            <select name="" id=""className="main_select form-control form_label_sec">
                                <option value="valor" className="col-md-9">teste</option> 
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="selecao" className="form_label">Adicionar logo do Evento</label>
                        {/* <input type="file" className="main_file_estilizado2"/> */}
                        <Form.Control type="file" className="main_file_estilizado2" />
                    </div> 
                </form>
                   <button className="btn_event">Salvar</button>
                   <button className="btn_event">Cancelar</button> 
            </main>
            <div >
                  <PageFooter/>
            </div>
        </div>
    )
}

export default PageDadosEventos;