import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { ContainerSlide, ContainerSearchProducts, ContainerProducts, CardProducts} from './style';
import Search from '../../assets/icons/search.png';
import api from '../../api';
import Slide from '../../components/Slide';

function Home(){

    const [statusModal, setStatusModal] = useState(false);
    const [listProducts, setListProducts] = useState([]);
    const [nameProduct, setNameProduct] = useState("");
    const [title, setTitle] = useState("Produtos");

    const handleModal = (idProduct) => {
         setStatusModal(statusModal ? false : true);
         localStorage.setItem('idProduct', idProduct)
    }

    const findProductByCategory = (category) => {
        async function findData() {
            const response = await api.get("",{ params: { category }});
            setListProducts(response.data);
            setTitle(response.data[0] === undefined ? "Produtos" : response.data[0].category);
        }

        findData();
      }

    useEffect(() => {

        async function findData() {
            const response = await api.get('');
            setListProducts(response.data);
        }

        findData();

      }, []);

      const handleNameProduct = (event) => {
        setNameProduct(event.target.value);
      }

      const findProductByName = () => {
        async function findData() {
            
            if(nameProduct !== null){
                const response = await api.get("",{ params: { nameProduct }});
                setListProducts(response.data === undefined ? [] : response.data);
            }else{
                const response = await api.get('');
                setListProducts(response.data);
            }
        }

        findData();
      }

    return(
        <>
             { statusModal ? <Modal handleModal={handleModal}/> : false}
            
            <Menu findProductByCategory={findProductByCategory}>
            </Menu>
            <ContainerSlide>
        	    <Slide>

                </Slide>
            </ContainerSlide>
            <ContainerSearchProducts>
                <div className="box-filter-title">
                    <div id="title-items">
                        {title}
                    </div>
                    <div id="filter-items">
                        <input type="text" placeholder="Pesquisar produto" maxLength="255" value={nameProduct} onChange={event => handleNameProduct(event)}/>
                        <img src={Search} alt="Procurar" onClick={() => findProductByName()}/> 
                    </div>
                </div> 
                <ContainerProducts>

                    {
                        listProducts.map(item => (
                        
                        <CardProducts key={item.idProduct}>
                            <img src={item.imageProduct} alt="Produto"/>
                            <h3>{item.nameProduct}</h3>
                            <div className="box-text">
                                <p>
                                    {item.descProduct}
                                </p>
                            </div>
                            <div className="box-button">
                                <button onClick={() => {handleModal(item.idProduct)}}>EU QUERO</button>
                            </div>
                        </CardProducts>

                        ))
                    } 
                    
                </ContainerProducts>
            </ContainerSearchProducts>
           
            <Footer/>
        </>
    );
}

export default Home;