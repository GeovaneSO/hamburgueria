import Button from '../Button';
import { CardCartAdd } from './style';

function CardCart({currentSale, setCurrentSale, id, category, name, img, price}){
    function remove(){
        const filter = currentSale.filter((product) => 
            product.id !== id
        );
        setCurrentSale(filter)
    }
    return(
        <CardCartAdd>
            <div className='box'>
                <figure><img src={img} alt={name} /></figure>
                <div className='info'>
                    <p className='name'>{name}</p>
                    <span className='category'>{category}</span>
                </div>
            </div>
            <div className='box__btn'>
                <Button onClick={remove}>Remover</Button>
            </div>
        </CardCartAdd>
    )
}
export default CardCart;