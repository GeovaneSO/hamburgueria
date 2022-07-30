import { useEffect, useState } from 'react';
// import Api from './Api';
// const listProducts = Api()
import App from '../../App';
import { CardMain } from './style';

function Card({id, category, name, price, img}){
    
    return(
        <CardMain >
            <figure><img src={img} alt={name} /></figure>
            <div className='info'>
                <p className='name'>{name}</p>
                <span className='category'>{category}</span>
                <p className='price'>{price}</p>
            </div>
            <button id={id}>Adicionar</button>
        </CardMain>
    );
}

export default Card;