import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { ContainerTop,ContainerTitle,ContainerBottom } from './style';
import Logo from '../../assets/logos/qubit_marca_final_cor.png';
/*import FncSnd from '../../assets/fornecedores/logo-snd.png';
import FncIngram from '../../assets/fornecedores/logo-ingram.png';*/
import Lg from '../../assets/logo_empresas_parceiras/lg.png';
import Acer from '../../assets/logo_empresas_parceiras/acer.png';
import Aoc from '../../assets/logo_empresas_parceiras/aoc.png';
import Positivo from '../../assets/logo_empresas_parceiras/positivo.png';
import Lenovo from '../../assets/logo_empresas_parceiras/lenovo.jpg';
import Microsoft from '../../assets/logo_empresas_parceiras/microsoft.jpg';
import Dell from '../../assets/logo_empresas_parceiras/dell.png';
import Samsung from '../../assets/logo_empresas_parceiras/samsung.png';
import Logitech from '../../assets/logo_empresas_parceiras/logitech.png';
import Benq from '../../assets/logo_empresas_parceiras/benq.jpg';
import Brother from '../../assets/logo_empresas_parceiras/brother.png';
import Playstation from '../../assets/logo_empresas_parceiras/playstation.png';
import Xbox from '../../assets/logo_empresas_parceiras/xbox.png';
import Tecvoz from '../../assets/logo_empresas_parceiras/tecvoz.png';
import Kaspersky from '../../assets/logo_empresas_parceiras/kaspersky.png';
import Hp from '../../assets/logo_empresas_parceiras/hp.png';

function Company(){
    return(
        <>
            <Menu>

            </Menu>
            <ContainerTop>
                 <div className="box-logo">
                    <img src={Logo} alt="Qubit"/>
                </div>
               <div className="box-texto">
                    <p>
                        Nascida a partir de uma visão do futuro, na qual contemplamos a evolução da tecnologia chegar a patamares antes inimagináveis, e conscientes de que cada vez mais o mercado corporativo, anseia por ter a seu favor tais tecnologias para otimizar seus processos, a QUBIT Revendas iniciou suas atividades para colocar a disposição da sua empresa, seja ela, de pequeno, médio ou grande porte, o que há de melhor nesse mundo cada vez mais tecnológico, a um preço justo e acessível.
                    </p>
                </div>
            </ContainerTop>
             <ContainerTitle>
                <div className="line"></div>
                <h3>FORNECEDORES</h3>
                <div className="line"></div>
            </ContainerTitle>
           <ContainerBottom>
                <div className="fornecedores">
                        <img src={Lg} alt="LG"/>
                </div>
                <div className="fornecedores">
                        <img src={Acer} alt="Acer"/>
                </div>
                <div className="fornecedores">
                        <img src={Aoc} alt="Aoc"/>
                </div>    
            </ContainerBottom>
            <ContainerBottom>
                <div className="fornecedores">
                        <img src={Positivo} alt="Positivo"/>
                </div>
                <div className="fornecedores">
                        <img src={Lenovo} alt="Lenovo"/>
                </div>
                <div className="fornecedores">
                        <img src={Microsoft} alt="Microsoft"/>
                </div>    
            </ContainerBottom>
            <ContainerBottom>
                <div className="fornecedores">
                        <img src={Dell} alt="Dell"/>
                </div>
                <div className="fornecedores">
                        <img src={Samsung} alt="Samsung"/>
                </div>
                <div className="fornecedores">
                        <img src={Logitech} alt="Logitech"/>
                </div>    
            </ContainerBottom>
            <ContainerBottom>
                <div className="fornecedores">
                        <img src={Benq} alt="Benq"/>
                </div>
                <div className="fornecedores">
                        <img src={Brother} alt="Brother"/>
                </div>
                <div className="fornecedores">
                        <img src={Playstation} alt="Playstation"/>
                </div>    
            </ContainerBottom>
            <ContainerBottom>
                <div className="fornecedores">
                        <img src={Xbox} alt="Xbox"/>
                </div>
                <div className="fornecedores">
                        <img src={Tecvoz} alt="Tecvoz"/>
                </div>
                <div className="fornecedores">
                        <img src={Kaspersky} alt="Kaspersky"/>
                </div>    
            </ContainerBottom>
            <ContainerBottom>
                <div className="fornecedores">
                        <img src={Hp} alt="Hp"/>
                </div>  
            </ContainerBottom>
            <Footer/>
        </>
    );
}

export default Company;