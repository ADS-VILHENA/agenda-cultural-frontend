import React from 'react'
import imgta from '../../assets/LogoMatheus/LogoMatheus.png';
import './header.css'
function PageHeader(){
    return(
        <header className="header">
                    <div>
                        <img src={imgta} alt="" className="imgLogoIni " />
                    </div>
                    <div className="header_top">
                 
                    </div>
        </header>  
    )
}
export default PageHeader;