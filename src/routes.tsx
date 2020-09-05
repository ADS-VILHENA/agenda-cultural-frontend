import React from 'react'
import{BrowserRouter, Route} from 'react-router-dom'
import Login from './pages/Login'
import Organizador from './pages/LoginOrganizador'
import Inicio from './pages/Inicio'
import PageCategorias from './pages/PageCategorias'
import PageEventos from './pages/PageEventos'
import Pageorganizador from './pages/PageOrganizador'
import PageAgenda from './pages/PageAgenda'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/Criar" component={Organizador}/>
            <Route path="/Inicio" component={Inicio}/>
            <Route path="/Categorias" component={PageCategorias}/>
            <Route path="/Eventos" component={PageEventos}/>
            <Route path="/Organizador" component={Pageorganizador}/>
            <Route path="/Agenda" component={PageAgenda}/>
        </BrowserRouter>
    )
}

export default Routes;