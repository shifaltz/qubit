import React, { useState } from 'react';
import { ContainerMenu, ItemMenu, MenuMobile, BoxMenuMobile } from './style';
import Logo from '../../assets/logos/qubit_q_cor.png';
import {Link} from 'react-router-dom';
import IconMenu from '../../assets/icons/menu.png';
import QbitLogo from '../../assets/logos/qubit_q_cor.png';
import { useHistory } from "react-router-dom";


function Menu({findProductByCategory}){

    const [menu, setMenu] = useState(false);
    
    let history = useHistory();

    const handleMenu = () =>{   
        setMenu(menu ? false : true);
    }

    const verify = (category) => {
        findProductByCategory !== undefined ? findProductByCategory(category) : history.push('/');
    }

    return(
        <>
        <MenuMobile>
            <img src={IconMenu} alt="Menu" className="icon-menu" onClick={() => handleMenu()}/>
            <img src={QbitLogo} alt="Logo da empresa" className="logo-company"/>
            {menu &&(<BoxMenuMobile>
                <Link to="/"><ItemMenu onClick={() => { verify("INFORMÁTICA"); handleMenu()}}> INFORMÁTICA</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("REDES"); handleMenu()}}>REDES</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("SEGURANÇA"); handleMenu()}}>SEGURANÇA</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("SOFTWARE"); handleMenu()}}>SOFTWARE</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("JOGOS"); handleMenu()}}>JOGOS</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("IMPRESSÃO"); handleMenu()}}>IMPRESSÃO</ItemMenu></Link>
                <Link to="/"><ItemMenu onClick={() => { verify("IMAGEM"); handleMenu()}}>IMAGEM</ItemMenu></Link>
                <ItemMenu  className="logo size-div-button" >
                <Link to="/quem-somos"><button>QUEM SOMOS</button></Link>
                </ItemMenu>
            </BoxMenuMobile>)}
        </MenuMobile>
        <ContainerMenu>
            <div>
            <ItemMenu className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo-qubit"/>
                </Link>
            </ItemMenu>
                <ItemMenu onClick={() => { verify("INFORMÁTICA"); handleMenu()}}> INFORMÁTICA</ItemMenu>
                <ItemMenu onClick={() => { verify("REDES"); handleMenu()}}>REDES</ItemMenu>
                <ItemMenu onClick={() => { verify("SEGURANÇA"); handleMenu()}}>SEGURANÇA</ItemMenu>
                {/* <ItemMenu onClick={() => { verify("AUTOMAÇÃO"); handleMenu()}}>AUTOMAÇÃO</ItemMenu> */}
                <ItemMenu onClick={() => { verify("SOFTWARE"); handleMenu()}}>SOFTWARE</ItemMenu>
                <ItemMenu onClick={() => { verify("JOGOS"); handleMenu()}}>JOGOS</ItemMenu>
                <ItemMenu onClick={() => { verify("IMPRESSÃO"); handleMenu()}}>IMPRESSÃO</ItemMenu>
                <ItemMenu onClick={() => { verify("IMAGEM"); handleMenu()}}>IMAGEM</ItemMenu>
                <ItemMenu  className="logo size-div-button" >
                <Link to="/quem-somos"><button>QUEM SOMOS</button></Link>
                </ItemMenu>
            </div>
        </ContainerMenu>
        </>
    );
}

export default Menu;