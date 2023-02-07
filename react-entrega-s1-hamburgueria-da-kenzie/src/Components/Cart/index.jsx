import { TitleCart } from "../Cart/style";
import CardCart from '../CardCart';
import { CartContainer } from './style';
import TotalMoney from '../TotalMoney';

function Cart({currentSale, setCurrentSale}){
    return (
        <> 
            <TitleCart className="title__cart">
                <h2>Carrinho de compras</h2>
            </TitleCart>

            <CartContainer className='cart__container'>
                <ul className="list__cart">
                    
                    {          
                        currentSale.length > 0 ?
                            currentSale.map((product) => (
                                <CardCart 
                                    key={product.id}
                                    currentSale={currentSale}
                                    setCurrentSale={setCurrentSale}
                                    id={product.id}
                                    category={product.category}
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                />   
                            ))
                                :
                            <div>
                                <p className="p1">Sua sacola está vazia</p>
                                <p className="p2">Adicione itens</p>
                            </div>                                
                    }
                    
                </ul>
                {
                    currentSale.length > 0 &&
                    <TotalMoney setCurrentSale={setCurrentSale} currentSale={currentSale}/>
                }
            </CartContainer>
        </>
    )
}

export default Cart;