import { useEffect, useState } from 'react';
import GlobalStyle from "./Styles/global";


import Header from './Components/Header';
import List from './Components/List';

import Cart from './Components/Cart';
import './App.css' 
function App() {
  const [nameProduct, setNameProduct] = useState('');
  const [currentSale, setCurrentSale] = useState([]);


  return (
    // <GlobalStyle className="App">
    <div className="App">
      <Header className="App-header" setNameProduct={setNameProduct}>
      </Header>
      <main>
        <section className="section__list">
          <List setCurrentSale={setCurrentSale} currentSale={currentSale} nameProduct={nameProduct} >
          </List>
        </section>
        <section className='section__cart'>
          <Cart setCurrentSale={setCurrentSale} currentSale={currentSale}>

          </Cart>
        </section>
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