import { useEffect, useState } from 'react';
import Api from '../../Api';
// const listProducts = Api()
// import App from '../../App';
import Button from '../Button';
import { CardMain } from './style';

function Card({setCurrentSale,currentSale,id, category, name, price, img}){    
    const listProducts = Api();
    const priceFinal =     new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

    function findProduct(){
        const product = listProducts.find((product) => product.id === id);
        const listFilter = currentSale.filter((item) => item.id !== product.id);

        setCurrentSale([...listFilter, product]);
    }

    return(
        <CardMain >
            <figure><img src={img} alt={name} /></figure>
            <div className='info'>
                <p className='name'>{name}</p>
                <span className='category'>{category}</span>
                <p className='price'>{priceFinal}</p>
            </div>
            <Button id={id} onClick={findProduct}>Adicionar</Button>
        </CardMain>
    );
}

export default Card;