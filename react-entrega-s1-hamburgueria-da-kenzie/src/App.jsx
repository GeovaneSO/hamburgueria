import {  useState } from 'react';


import Header from './Components/Header';
import List from './Components/List';

import Cart from './Components/Cart';
import './App.css' 
function App() {
  const [nameProduct, setNameProduct] = useState('');
  const [currentSale, setCurrentSale] = useState([]);


  return (
    <div className="App">
      <Header className="App-header" setNameProduct={setNameProduct}/>
      <main>
        <section className="section__list">
          <List setCurrentSale={setCurrentSale} currentSale={currentSale} nameProduct={nameProduct} /> 
        </section>
        <section className='section__cart'>
          <Cart setCurrentSale={setCurrentSale} currentSale={currentSale}/>
        </section>
      </main>
    </div>
  );
}

export default App;
