import React from 'react'
import PageHeader from '../../components/Header';
import deletar from '../../assets/LogoMatheus/Icons/bin.png'
import './PageCategoria.css'

function PageCategorias(){
    return(
        <div>
            <div>
                <PageHeader />
            </div>
            <div className="test">
                <div className="titulo_cat ">
                    <h1>Categoria:</h1>
                </div> 
                
                <section  >
                    <div >
                        <form >
                            <div>
                                <label className="formulario_label">Nome da categoria:</label><br/>
                                <input type="text" className="formulario_input "/>
                                <button type="button" className="btn btn-primary btn-lg button_cat">Salvar</button>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div>
                                <label className="formulario_label">Categorias:</label><br/>
                                <input type="text" className="formulario_input col-7"/>
                                <button type="button" className="btn btn-danger btn-lg button_cat">Deletar</button>
                                
                            </div>
                            
                        </form>
                        
                     </div>
                </section>
            </div>
        </div>
    )
}

export default PageCategorias;