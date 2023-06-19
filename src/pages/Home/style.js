import styled from 'styled-components';

export const ContainerSlide = styled.div`
    width: 100%;
    height: 554px;
    padding-top: 60px;
    padding-left: 80px;
    padding-right: 80px;
    margin-bottom: 50px;
    justify-content: center;
    display: flex;
    align-items: center;

    .carousel{
        img{
            width: 800px;
            object-fit: contain;
            max-height: 550px;
        }
    }

    /* RESPONSIVO */

    @media only screen and (max-width: 600px) {
        min-width: 300px;
        padding-left: 10px;
        padding-right: 10px;
        height: 250px;
        padding-top: 200px; 

        img{
            
            width: 350px;
            height: 250px;
        }
    }

`

export const ContainerSearchProducts = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;
    margin-left: auto;
    margin-right:  auto;

    .box-filter-title{
        width: 100%;
        max-width: 1400px;
        height: 50px; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #title-items{
        width: auto;
        padding-left: 45px;
        font-size: 20px;
        font-weight: bold;
    }

    #filter-items{
        width: 400px;
    }

    #filter-items img{
        width: 30px;
        height: 30px;
        position: absolute;
        margin-right: 50px;
    }

    #filter-items img:hover{
        cursor: pointer;
    }

     input:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    #filter-items input{
        width: 315px;
        height: 30px;
        margin-right: 90px;
        border: solid 1px #B0B0B0;
        border-radius: 15px;
        text-align: center;
        color: #000;
        font-weight: bold;
        margin-right: 10px;
    }

    @media only screen and (max-width: 600px) {
        margin-top: 150px;

        #title-items{
            width: auto;
            padding-left: 25px;
            margin-right: 50px;
        }

        #filter-items{
            width: 220px;

            input{
                width: 70%;
            }

        }
    }

`;

export const ContainerProducts = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;
    min-height: 700px;
    margin-left: auto;
    margin-right:  auto;
    padding-top: 30px;
    justify-content: space-between;
    align-items: center;
    display: inline-grid;
    grid-template-columns: auto auto auto;
    padding-left: 50px;
    padding-right: 50px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        display: flex;

    }

`

export const CardProducts = styled.div`
    width: 315px;
    height: 415px;
    border: solid 1px #147E32;
    border-radius: 15px; 
    margin-bottom: 70px;

    img{
        width: 235px;
        height: 180px;
        margin-left: 40px;
        margin-bottom: 10px;
        object-fit: contain;
        padding-top: 10px;
    }

    h3{
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;   
         display: -webkit-box;
        -webkit-line-clamp: 1; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .box-text{
        width: inherit;
        height: 105px;
        color: #000;
        
    }

    p {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 25px;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-weight: bolder;
        text-overflow: ellipsis;
    }

    .box-button{
        width: inherit;
        height: 104px;
    }

    button{
        width: 160px;
        height: 33px;
        border: solid 1px #147E3E;
        text-align: center; 
        background-color: #fff;
        margin-left: 77.5px;
        margin-top: 40px;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover{
        background-color: #147E3E;
        color: #fff;
    }
`
