import React, {  useState } from 'react'
import PageHeader from '../../components/Header';
import './PageCategoria.css'
import PageMenu from '../../components/MenuLateral';
import PageFooter from '../../components/Footer/footer';
//import lixeira from '../../assets/LogoMatheus/Icons/lixeira.png';
import api from '../../services/api';
import Form from 'react-bootstrap/Form';
import PageTitulo from '../../components/Titulo';
//import Axios from 'axios';


function handleCategoria({contentType}:any, {data}:any, {setResponse}:any){
    
    api.post('/categoria',{
        data: data,
        headers: {
            'Content-Type': contentType
        }
    }).then(() => {
        alert('Categoria criada com sucesso!');
    }).catch(() => {
        alert('Erro no cadastro!');
    })
}



function PageCategorias(){

const [nome, setCategoria] = useState('');
const [descricao, setDescricao] = useState('');
const [imagem, setImagem] = useState<any>();

function upload(){
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("imagem", imagem);

    handleCategoria("multipart/form-data", formData, (msg:any)=> console.log(msg));
}
return(
    <div >
        <div>
            <PageHeader/>
        </div>
        <div className="hh">
            <PageMenu/>
        </div>
        <div>
            <PageTitulo title="Cadastro de Categorias"/>
        </div>
        <main className="main_evento">        
            <form className="form_border" data-testid="Categoria_1">
                <div className="form-group">
                    <label className="form_label_teste">Nome da Categoria</label>
                    <input type="text" className="form-control form_input2"/>
                </div>
                <div className="form-group">
                    <label className="form_label_teste">Descrição</label>
                    <textarea className="form-control form_input2"/>
                </div> 
                <div className="form-group">
                    <label htmlFor="selecao" className="form_label">Adicionar logo do Evento</label>
                    <input type="file" className="main_file_estilizado2" />
                </div> 
            </form >
            <button  className="btn_even2" type="submit">Salvar</button>
            <button  className="btn_even2">Cancelar</button>  
            <div >
                <h1 className="main_h2_titulo">Categorias</h1>
            </div>                
            <div className="form-row form_border">
                <input type="text" className="form-control form_input3 col-md-9"/>
                <button className="btn_evento3 btn btn-danger">Deletar</button>
                <button className="btn_evento4 btn btn-warning">Alterar</button>  
            </div>                      
        </main>
        <div className="coisa">
            <PageFooter/>
        </div>
    </div>
    
)
}

export default PageCategorias;