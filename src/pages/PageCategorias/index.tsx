import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/Header';
import './PageCategoria.css'
import PageMenu from '../../components/MenuLateral';
import lixeira from '../../assets/LogoMatheus/Icons/lixeira.png'
import api from '../../services/api';
import { request } from 'https';
import { Session } from 'inspector';


function PageCategorias(){
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    
   
   function handleCategoria(e: FormEvent){
        e.preventDefault();
        api.post('categoria',  {
            categoria,
            descricao,
            imagem,
        },{withCredentials: true}).then(() => {
            
            alert('Categoria criada com sucesso!');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }
    return(
        <div>
            <div>
                <PageHeader />
            </div>
            <div>
                <PageMenu />
            </div>
            
            <main id="page-evento2" className="page_main_even2">  
                <fieldset className="top ">
                    <div className="t" >
                        <legend>Cadastro de categoria</legend>
                        <form  onSubmit={handleCategoria} >
                            <p>
                                <label htmlFor="">Nome da Categoria:</label>
                                <input name="categoria" type="text" value={categoria} onChange={(e) => {setCategoria (e.target.value)}}/>
                            </p>
                            <p>
                                <label htmlFor="">Descricão:</label>
                                <input name="categoria" type="text" value={descricao} onChange={(e) => {setDescricao (e.target.value)}}/>
                            </p>
                            <p>
                                <label htmlFor="">Imagem Categoria:</label>
                                <input name="imagem" type="file" value={imagem} onChange={(e) => {setImagem (e.target.value)}}/>
                            </p>
                         
                            <button className="btn_evento2" type="submit">Salvar</button>
                            <button className="btn_evento2">Cancelar</button> 
                        </form>    
                    </div>
                        <div className=" form_2">
                           <h1 className="page-cat"> Categorias :</h1>
                           <form>
                                <p>
                                    <input type="text"/>
                                    <button className="btn_evento3 btn btn-danger">Deletar</button>
                                    <button className="btn_evento4 btn btn-warning">Alterar</button>     
                                </p>
                            </form> 
                        </div>
                </fieldset> 
            </main>
        </div>
    )
}

export default PageCategorias;