//import { clear } from 'console';
import React from 'react'
import {Link} from 'react-router-dom'
import imgHome from '../../assets/LogoMatheus/Icons/icons8-casa.svg'
import imgEvento from '../../assets/LogoMatheus/Icons/eventos_icon.png'
import imgCategoria from '../../assets/LogoMatheus/Icons/categoria_icon.png'
import imgOrganizagor from '../../assets/LogoMatheus/Icons/organizador_icon.png'
//import api from '../../services/api';
// import { logout } from '../../services/auth';
import './menu.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button';
//import  NavDropdown  from 'react-bootstrap/NavDropdown';
//import  FormControl  from 'react-bootstrap/FormControl';

function PageMenu(){

    //const history = useHistory();

    // function handleLogout(){
    //         api.post('organizador/logout', {
    //         }).then(() => {
    //              logout()
    //         }).catch(() => {
    //             alert('Ocorreu um erro ao sair!');
    //         })
    //     }
    return(
        <div>
          <Navbar id="menu"  expand="lg" className="menu_l Navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="Navbar"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto Navbar">
              <Link to="/Agenda"><li className="nav-item menu_color1"><img src={imgHome} alt="inicio" className="menu_img_home "/>Inicio</li></Link>
              <Link to="/Eventos"><li className="nav-item menu_color2"><img src={imgEvento} alt="inicio" className="menu_img "/>Eventos</li></Link> 
              <Link to="/Categorias"><li className="nav-item menu_color3"><img src={imgCategoria} alt="inicio" className="menu_img "/>Categorias</li></Link>
              <Link to="/organizador"><li className="nav-item menu_color4"><img src={imgOrganizagor} alt="inicio" className="menu_img "/>Organizador</li></Link> 
              </Nav>
            <Form inline>
              <Button variant="outline" className="header_top_button">Sair</Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
}
export default PageMenu;