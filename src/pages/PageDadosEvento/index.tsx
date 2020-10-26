import React  from 'react'
import PageHeader from '../../components/Header';
import './eventos.css'
import PageMenu from '../../components/MenuLateral';

function PageEventos(){
    return(
        <div>
            <div>
                <PageHeader />
            </div>
            <div>
                <PageMenu />
            </div>
                <main id="page-evento" className="page_main_even">  
                
                    <fieldset>
                        <legend>Evento</legend>
                        <form className="form">
                            <p>
                                <label htmlFor="">Titulo:</label>
                                <input type="text"/>
                            </p>
                            <p>
                                <label htmlFor="">Descrição:</label>
                                <textarea />
                            </p>
                            <p>
                                <label htmlFor="">Endereço:</label> 
                                <input type="text" />
                            </p>
                            
                            <p>
                                <label htmlFor="" >Localização:</label>
                                <input type="text" placeholder="Local de Referência"/>
                            </p>
                            <p>
                                <label htmlFor="">Telefone:</label>
                                <input type="text" />
                            </p>
                            <p>
                                <label htmlFor="">Hora:</label>
                                <input type="time" />
                            </p>
                            <p>
                                <label htmlFor="">Data:</label>
                                <input type="date" />
                            </p>
                            <p>
                                <label htmlFor="">Categoria:</label>
                                <select>
                                    <option value="valor">Categoria</option>
                                    <option value="valor"></option>
                                </select> 
                            </p>
                            <p>
                                <label htmlFor="">Logo</label>
                                <input type="file" />
                            </p>
                        </form> 
                          
                        <button className="btn_evento">Salvar</button>
                        <button className="btn_evento">Cancelar</button>                
                    </fieldset>    
                </main>
        </div>
    )
}

export default PageEventos;