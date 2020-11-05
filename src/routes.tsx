import React from 'react'
import{BrowserRouter, Redirect, Route, RouteProps, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Organizador from './pages/LoginOrganizador'
import PageCategorias from './pages/PageCategorias'
import PageEventos from './pages/PageEventos'
import Pageorganizador from './pages/PageOrganizador'
import PageAgenda from './pages/PageAgenda'
import PageDadosEvento from './pages/PageDadosEvento'
import {isAuthenticated} from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }:any) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ):(
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );


export default function Routes(){
    return(
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Criar" component={Organizador}/>
                <PrivateRoute path="/Categorias" component={PageCategorias}/>
                <PrivateRoute path="/Eventos" component={PageEventos}/>
                <PrivateRoute path="/Organizador" component={Pageorganizador}/>
                <PrivateRoute path="/Agenda" component={PageAgenda}/>
                <PrivateRoute path="/DadosEventos" component={PageDadosEvento}/>
                <PrivateRoute path="*" component={() => <h1>Pagina não encontrada!</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

