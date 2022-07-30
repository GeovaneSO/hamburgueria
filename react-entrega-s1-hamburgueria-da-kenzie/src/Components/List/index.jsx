import Card from '../Card';
import Api from '../../Api'
import { ListMain } from './style';

function List(){
    const listProducts = Api()
    console.log(listProducts)
  
    return(
        <ListMain>
            {
                listProducts.map((product) => 
                    <Card 
                        key={product.id}
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