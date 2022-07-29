// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import GlobalStyle from "./Styles/global";
import Header from './Components/Header';
import Api from './Api';

function App() {
 
  const listProducts = Api()
  console.log(listProducts)
  return (
    // <GlobalStyle className="App">
    <div className="App">
      <Header className="App-header">
      </Header>
    </div>
    // </GlobalStyle>
  );
}

export default App;
// const [products, setProducts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([]);
// const [currentSale, setCurrentSale] = useState([])
// const [cartTotal, setCartTotal] = useState(0)