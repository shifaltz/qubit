import styled from 'styled-components';

export const ContainerMenu = styled.div`
    width: 100%;
    height: 100px;
    font-size: 13px; 
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 999;
    font-weight: bold;
    background-color: white;

    a{
        text-decoration: none;
        color: #000;
    }

    div{
        max-width: 1400px;
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
    }

    .logo:hover, button:hover{
        border: none;
    }

    .logo:hover{
        cursor: default;
    }

    .logo img{
        width: 70px;
        height: 70px;
        cursor: pointer;
        margin-right:40px;
    }


    .size-div-button{
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }

`;

export const ItemMenu = styled.div`
        width: 90px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;

    @media only screen and (max-width: 600px) {
        align-items: flex-start;
        justify-content: flex-start;
        height: 25px;
        width: 100%;
        font-weight: bold;
        margin-bottom: 30px;
    }

    :hover{
        border-bottom: solid 1px #147E3E;
        cursor: pointer;
    }
 
    button{
        width: 150px;
        height: 30px;
        background-color: #000;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
    }
`

/* RESPONSIVO */

export const MenuMobile = styled.div`
    background-color: #fff;
    display: none;
    position: fixed;
    z-index: 999;

    a{
        text-decoration: none;
        color: #000;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 50px;
            height: 50px;
        }

        .icon-menu{
            position: absolute;
            margin: 15px; 
            left: 0;
        }

        .logo-company{
        }
    }
`

export const BoxMenuMobile = styled.div`
        width: 70%;
        height: 100vh;
        background-color: #fff;
        padding-top: 20px;
        position: absolute;
        left: 0;
        top: 100px; 
        display: flex;
        flex-direction: column;
        padding-left: 40px;
        text-align: left;
`