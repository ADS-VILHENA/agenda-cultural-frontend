import React from 'react';
import { render, waitForElement} from '@testing-library/react'
import Routes from '../routes';
import PageCategorias from '../pages/PageCategorias';
import PageFooter from './Footer/footer';
import Organizador from '../pages/LoginOrganizador';
import Login from '../pages/Login/index'
import PageHeader from './Header';
import {Registro} from './Formulario/index';
import {LoginUsuario} from './FormularioLogin/index';

//testes de renderização de rotas

// describe('Routes', () => {
//   render(<PageCategorias/>)
//   const elementoCategoria = screen.getByTestID('categoria_1')
//   expect(elementoCategoria).toBeInTheDocument();

//   it('Renderização rotas `/`', async () => {
    
//     expect(container.innerHTML).toMatch(/Organizador/);
//   });
// });

// describe('Routes', () => {
//   it('Renderização rotas `/`', async () => {
//     const history = createMemoryHistory();
//     history.push('/Criar'); 
//     const container = render(
//       <Router history={history}>
//         <Routes />
//       </Router>
//     );
//     expect(container.innerHTML).toMatch(/Organizador/);
//   });
// });

// test('tela', () =>{
//   render(<Organizador/>)
//   const valor = screen.getByText("/Organizador/")
//   console.log(valor)
// })


// describe('Routes', () => {
//     it('Renderização rotas Organizador `/PageFooter`', async () => {
//       const history = createMemoryHistory();
//       history.push('/PageFooter');
//       const { container } = render(
//         <Router history={history}>
//           <Routes />
//         </Router> 
//       );
//       expect(container.innerHTML).toMatch(/PageFooter/);
//     });
//   });


// teste de renderização de componentes 
describe('Teste de componente PageHeader', () => {
    it('teste', async () =>{
        const {getByTestId} = render(<PageHeader/>)
        const elemento1 = await waitForElement(
            () => getByTestId('Page_1') 
        )
        expect(elemento1)
    })
}) ;

describe('Teste de componente PageFooter', () => {
    it('teste', async () =>{
        const {getByTestId} = render(<PageFooter/>)
        const elemento2 = await waitForElement(
            () => getByTestId('Footer_1') 
        )
        expect(elemento2)
    })
}) 

describe('Teste de componente LoginUsuario', () => {
    it('teste de renderização', async () =>{
        const {getAllByTestId} = render(<LoginUsuario/>)
        const fieldNode = await waitForElement(
            () => getAllByTestId('form-field')
        )
        console.log(fieldNode)
    })
})

describe('Teste de componente Registro', () => {
    it('teste de renderização', async () =>{
        const {getAllByTestId} = render(<Registro/>)
        const fieldNode = await waitForElement(
            () => getAllByTestId('form-field')
        )
        console.log(fieldNode)
    })
})
