import styled from 'styled-components';

export const ContainerFooter = styled.div`
    width: 100%;
    height: 324px;
    background-color: #393939;
    margin-top: 60px;

    .box img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    .box-top{
        max-width: 1400px;
        width: 100%;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
    }

    .box{
        box-sizing: border-box;
        width: 480px;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 110px;
        padding-right: 110px;
        color: #fff;
        font-size: 20px;
        padding-top: 50px;
        font-weight: bold;
    }

   .box .img-logo{
       width: 190px;
       height: 85px;
       margin-left: 30px;
   }

    .box-bottom{
        max-width: 1200px;
        width: 100%;
        height: 70px;
        margin-left: auto;
        margin-right: auto;
        border: solid 1px #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }


    .box-contact{
        width: 400px;
        height: 35px;
        color: #fff;
        border-left: 1px solid #fff;
        text-align: center;
        box-sizing: border-box;
        font-size: 18px;
        padding-top: 5px;
        font-weight: bold;
    }

    .border-none{
        border-left: none;
    }

    @media only screen and (max-width: 600px) {
        min-height: 200px;
        height: auto;
        padding-bottom: 20px;

        .box-top{
            height: auto;
            flex-direction: column;
        }

        .box{
            width: 100%;
            padding-left: 30px;
            padding-right: 30px;
            color: #fff;
            font-size: 20px;
            padding-top: 50px;
            font-weight: bold;
        }

        .box .img-logo{
            margin-left: 0;
        }

        .box-mobile{
            text-align: center;
            display: flex;
            color: white;
            align-items: center;
            justify-content: center;
        }

        .box-bottom{
            width: 90%;
            height: auto;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            padding: 10px;
        }

        .box-contact{
            border: none;
        }

    }

`

export const ContainerEndFooter = styled.div`
    width: 100%;
    height: 150px;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

`