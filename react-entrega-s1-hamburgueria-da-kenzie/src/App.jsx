// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import GlobalStyle from "./Styles/global";
import Header from './Components/Header';
import List from './Components/List';

function App() {

 
  return (
    // <GlobalStyle className="App">
    <div className="App">
      <Header className="App-header">
      </Header>
      <main>
        <List>
          {/* {
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
          } */}
        </List>
      </main>
    </div>
    // </GlobalStyle>
  );
}

export default App;
// const [products, setProducts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([]);
// const [currentSale, setCurrentSale] = useState([])
// const [cartTotal, setCartTotal] = useState(0)