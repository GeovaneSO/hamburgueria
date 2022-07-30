
import Card from '../Card';
import Api from '../../Api';
// import { useState } from 'react';
import { ListMain } from './style';

function SearchProduct({nameProduct}){
    const listProducts = Api();
    // const [valueSearch, setValueSearch] = useState('');
    const itens = listProducts.filter((product) => product.name === nameProduct)
    console.log(itens)
    return(
        <ListMain>
        {
            itens.length > 0 &&
                itens.map((item) => 
                    <Card 
                        key={item.id}
                        id={item.id}
                        category={item.category}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                    />
                )  
        }
        </ListMain>

    )
}

export default SearchProduct;
