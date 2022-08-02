import { ContainerTotal } from "./style";
import Button from "../Button";

function TotalMoney ({currentSale, setCurrentSale}){
    const value = currentSale.reduce((acc, val) => {
        return acc + val.price
    }, 0);

    const total = Math.round(value);
    const final =     new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);

    function removeAll(){
        setCurrentSale([]);
    };

    return(
        <ContainerTotal className="container">
            <div>
                <p className="total">Total</p>
                <p className="price">{final}</p>
            </div>
            <Button onClick={removeAll}>Remover todos</Button>
        </ContainerTotal>
    );
};

export default TotalMoney;