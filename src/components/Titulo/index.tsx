import React from 'react'
import './style.css'


interface PageTituloProps{
    title: string;
}
const PageTitulo: React.FC<PageTituloProps> = ({title}) =>{
    return(
        <h1 className="main_Titulo">{title}</h1>
    )
}

export default PageTitulo;
    
