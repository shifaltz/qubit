import styled from 'styled-components';

export const ContainerTop = styled.div`
    max-width: 1400px;
    width: 100%;
    min-height: 450px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    
    .box-logo{
        width: 40%;
        min-height: 100px;
        height: auto;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .box-texto{
        width: 60%;
        height: 500px;
        justify-content: center;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 25px;
        padding: 35px;
        box-sizing: border-box;
    }

    .box-logo img{
        width: 520px;
        height: 254px;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
            
        .box-logo{
            width: 100%;
            padding: 15px;
            margin-top: 70px;

            img{
                width: 90%;
                object-fit: contain;
            } 
        }

        .box-texto{
            width: 100%;
            height: auto;
            font-size: 22px;
            padding-left: 15px;
            padding-right: 15px;
            box-sizing: border-box;
        }


    }

` 

export const ContainerTitle = styled.div`
    max-width: 1400px;
    width: 100%;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    padding-top: 100px;
    margin-bottom: 60px;

    .line{
        width: 100%;
        height: 2px;
        box-sizing: border-box;
        background-color: #000;
    }

    h3{
        margin-top: -16px;
        padding-left: 80px;
        padding-right: 80px;
        font-weight: normal;
        font-size: 25px;
    }   

    @media only screen and (max-width: 600px) {
        height: 100px;
        padding-top: 30px;
        margin-bottom: 130px;

        h3{
            font-weight: bold;
            padding-left: 15px;
            padding-right: 15px;
        }

        .line{
            width: 100%;
            height: 2px;
            background-color: #000;
        }

    }
`

export const ContainerBottom = styled.div`
    max-width: 1400px;
    width: 100%;
    height: auto;
    min-height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .fornecedores{
        margin: 60px;
        margin-left: 100px;
        height: auto;

        img{
            width: 180px;
            height: 100px;
            object-fit: contain;
        }
    }
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;

        .fornecedores, .fornecedores img{
            margin: 0;
            height: 180px;
            width: 100%;
            padding-left: 35px;
            padding-right: 35px;
            margin-top: -80px;
            margin-bottom: 40px;
        }
    }

` 