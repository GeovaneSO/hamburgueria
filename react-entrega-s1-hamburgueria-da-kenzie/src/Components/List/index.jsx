import Card from '../Card';
import Api from '../../Api';
import { BoxResult } from './style';
import { ListMain } from './style';

function List({nameProduct, currentSale, setCurrentSale}){
    const listProducts = Api();
    
    const itens = listProducts.filter((product) => product.name.toUpperCase().includes(nameProduct.toUpperCase()) || product.category.toUpperCase().includes(nameProduct.toUpperCase()))

    return(
        <>
        
            {
                nameProduct !== '' && itens.length > 0 && 
                    <BoxResult className='box__result'>
                        <p>Resultados para: <span> {nameProduct}</span></p>
                    </BoxResult>             
            }
             
            <ListMain itens={itens}>

                {
                        
                    itens.length > 0 ?

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

                        nameProduct !== '' &&  itens.length === 0  &&
                            <BoxResult className='box__result'>
                                <p>Nenhum resultado para: <span> {nameProduct}</span></p>
                            </BoxResult>      
                }
            </ListMain>
        </>
    )
}

export default List;