import Card from '../Card';
import Api from '../../Api';
import { useState } from 'react';
import { ListMain } from './style';

function List({nameProduct, currentSale, setCurrentSale}){
    const listProducts = Api();
    
    const itens = listProducts.filter((product) => product.name.toUpperCase().includes(nameProduct.toUpperCase()) || product.category.toUpperCase().includes(nameProduct.toUpperCase()))
  
    return(
        <ListMain>
            {
                itens.length > 0 ?
                    <div>
                        <p>Resultados para: {nameProduct}</p>
                    </div> &&
                    itens.map((item) => 
                        <Card 
                            key={item.id}
                            currentSale={currentSale}
                            setCurrentSale={setCurrentSale}
                            id={item.id}
                            category={item.category}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                        />
                    )  :    
                listProducts.map((product) => 
                    <Card 
                        key={product.id}
                        currentSale={currentSale}
                        setCurrentSale={setCurrentSale}
                        id={product.id}
                        category={product.category}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                    />
                )
            }
        </ListMain>
    )
}

export default List;