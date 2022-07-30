import { ContainerTotal } from "./style";
import Button from "../Button";
function TotalMoney ({currentSale}){
    const total = currentSale.reduce((acc, val) => {
        return acc + val.price
    }, 0);

    return(
        <ContainerTotal className="container">
            <div>
            <p>Total</p>
            <p>{total}</p>
            </div>
            <Button>Remover todos</Button>
        </ContainerTotal>
    );
};

export default TotalMoney;