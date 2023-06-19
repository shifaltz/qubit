import React, { useEffect, useState } from 'react';
import { BackModal, ContainerModal, ContainerDetails } from './style';
import Close from '../../assets/icons/close.png';
import api from '../../api';
import Error404 from '../../assets/images/error404.jpg';

function Modal(handleModal){

    const [product, setProduct] = useState([]);

    useEffect( () => {

        let id = localStorage.getItem('idProduct');
        findDataById(id)

    }, [handleModal]);

    const findDataById = async (id) => {
        const response = await api.get("",{ params: { id }});
        setProduct(response.data[0]);
    }

    return(
        <BackModal>
            <ContainerModal>
                            <div id="btn-close">
                                <img src={Close} onClick={() => handleModal.handleModal()} alt="Fechar Modal"/>
                            </div>
                {
                    product ? (
                        <>
                            <ContainerDetails>
                                <div className="product-contact">
                                    <img src={product.imageProduct} alt="img-product"/>
                                    *imagem ilustrativa
                                    <h3>Contato pra compra:</h3>
                                    <span>Telefone</span>
                                    <span className="data-contact">(11) 2878-9685</span>
                                    <span className="none-email">Email</span>
                                    <span className="data-contact none-email">contato@qubit.com.br</span>
                                </div>
                                <div className="product-description">
                                <h1>{product.nameProduct}</h1>

                                    <span>Categoria:</span>
                                    <span className="product-category">{product.category}</span><br/><br/>

                                    <span className="details">Detalhes:</span><br/>
                                    <p>
                                        {product.descProduct}
                                    </p>
                                </div>
                            </ContainerDetails>
                        </>
                        ) : (<img src={Error404} alt="Error 404" className="image-error"/>)
                }
               
            </ContainerModal>
        </BackModal>
    );
}

export default Modal;