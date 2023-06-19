import styled from 'styled-components';


export const BackModal = styled.div`
    position: fixed;
    width: 100vw;
    z-index: 10;
    height: auto;
    min-height: 100vh;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    background: rgba(0, 0, 0, 0.38);

`

export const ContainerModal = styled.div`
    width: 700px;
    height: 500px;
    border: solid 1px #147E3E;
    background-color: #fff;
    font-weight: bold;

    .image-error{
        width: 90%;
        height: 400px;
    }

    #btn-close img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    #btn-close{
        width: 700px;
        height: 35px;
        text-align: right;
        padding-top: 5px;
        padding-right: 10px;
    }

    @media only screen and (max-width: 600px) {
        width: 90%; 
        
        #btn-close{
            width: 100%;
        }
    }
    
`
export const ContainerDetails = styled.div`
    width: 100%;
    height: 465px;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    
    div{
        width: 50%;
        height: 465px;
    }

    .product-contact{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        text-align: center;

        span{
            font-weight: bold;
        }

        img{
            width: 250px;
            height: 200px;
            margin-left: 45px;
            object-fit: contain;
        }

        h3{
            font-size: 20px;
            font-weight: normal;
            padding-bottom: 10px;
        }

        .data-contact{
            padding-bottom: 20px;
            font-size: 18px;
            font-weight: normal;
        }     

        @media only screen and (max-width: 600px) {
            img{
                width: 160px;
                height: 110px;
                margin-left: 0;
                object-fit: contain;
            }

            .none-email{
                display:none;
            }
        }   
    }

    .product-description{

        h1{
            font-size: 22px;
            font-weight: normal;
            padding-bottom: 10px;
        }

        span{
            font-weight: bold;
            padding-right: 10px;
        }

        .product-category{
            padding-bottom: 20px;
            font-weight: normal;
        }

        p{
            max-height: 320px;
            padding-top: 10px;
            padding-right: 20px;
            overflow-y: scroll;
        }

        @media only screen and (max-width: 600px) {
            h1{
                height: 85px;
                font-size: 22px;
                font-weight: normal;
                padding-bottom: 10px;   
                 display: -webkit-box;
                -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            p{
                height: 230px;
            }
            
            .product-category{
                margin-left: -8px;
                font-weight: normal;
            }


        }

     
    }

    

`
