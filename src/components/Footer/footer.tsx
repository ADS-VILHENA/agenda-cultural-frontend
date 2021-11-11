import React from 'react';
import imgta from '../../assets/LogoMatheus/LogoMatheus.png';
import './footer.css';

function PageFooter(){

    return(
      <footer className="text-left text-sm-start footer2" data-testid="Footer_1">
      <section
        className="d-flex justify-content-center justify-content-sm-between p-5 border-bottom">
      </section> 
      <section>
        <div className="container text-center text-md-start mt-5 ">
          <div className="footer2_margim">
            <img src={imgta} alt="" className="imgLogoFooter"/>
            <h6 className="textt text-muted" >
                Agenda Cultural de Vilhena
            </h6>
          </div>
          <div className="footer2_margim2 text-muted">
            <h6 className=" textt">
                Contato: (69) 98426-7879
            </h6>
            <h6 className=" textt ">
                Email:agendaculturaldevilhena@gmail.com.br
              </h6>
          </div>
        </div>
      </section>
      </footer> 
   )
}
export default PageFooter;