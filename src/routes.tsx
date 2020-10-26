import React from 'react'
import{BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Organizador from './pages/LoginOrganizador'
import PageCategorias from './pages/PageCategorias'
import PageEventos from './pages/PageEventos'
import Pageorganizador from './pages/PageOrganizador'
import PageAgenda from './pages/PageAgenda'
import PageDadosEvento from './pages/PageDadosEvento'


export default function Routes(){
    return(
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Criar" component={Organizador}/>
                <Route path="/Categorias" component={PageCategorias}/>
                <Route path="/Eventos" component={PageEventos}/>
                <Route path="/Organizador" component={Pageorganizador}/>
                <Route path="/Agenda" component={PageAgenda}/>
                <Route path="/DadosEventos" component={PageDadosEvento}/>
                <Route path="*" component={() => <h1>Pagina não encontrada!</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

