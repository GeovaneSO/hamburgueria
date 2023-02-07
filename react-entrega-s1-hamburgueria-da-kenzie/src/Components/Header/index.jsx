import React from 'react';
import {useState} from 'react';
import { HeaderMain } from './styles';
import logo from '../../logo.svg'

function Header({setNameProduct}){
    const [search, setSearch] = useState('');
    return(
        <HeaderMain>
            <div className="container">
                <figure><img src={logo} alt="Logo Haburgueria" /></figure>
                <div className="box__search">
                    <input
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Digitar Pesquisa" 
                        type="text" 
                        id='search'
                        value={search}
                    />
                    <button onClick={() => {
                        setNameProduct(search)
                    }}>Pesquisar</button>
                </div>
            </div>
        </HeaderMain>
    )
}

export default Header;
