import React from 'react';
import {ContainerFooter, ContainerEndFooter} from './style';
import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Logo from '../../assets/logos/qubit_branco.png';

function Footer(){
    return(
        <>
            <ContainerFooter>
                  <div className="box-top">
                    <div className="box">
                       <img src={Facebook} alt="Facebook"/>
                       <img src={Instagram} alt="Instagram" onClick={ () => window.open("https://www.instagram.com/qubitrevendas/")}/>
                       <img src={Twitter} alt="Twitter"/>
                      <img src={Linkedin} alt="Youtube" onClick={ () => window.open("https://www.linkedin.com/company/qubit-revendas")}/>
                    </div>
                    <div className="box box-mobile">
                        <img src={Logo} alt="Qubit" className="img-logo"/>
                    </div>
                    <div className="box box-mobile">
                        R. Fernando Nobre, 1410 - Jardim do Golf I, Jandira- SP | 06642-005
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="box-contact border-none">E-mail: contato@qubitrevendas.com.br</div>
                    <div className="box-contact">Telefone:  (11) 4618-1899</div>
                    <div className="box-contact">Whatsapp:  (11) 2878-9372</div>
                </div> 
            </ContainerFooter>
            <ContainerEndFooter>
                Todos os direitos reservados | 2020 
            </ContainerEndFooter>
        </>
    );
}

export default Footer;
