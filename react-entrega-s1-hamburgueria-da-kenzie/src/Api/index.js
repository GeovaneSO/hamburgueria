import { useEffect, useState } from 'react';

function Api(){
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err)) 
    }, [])
  
    return products;
}

export default Api;