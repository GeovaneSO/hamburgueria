import React from 'react';
import {useState, useEffect} from 'react';
import { HeaderMain } from './styles';
import logo from '../../logo.svg'
function Header(){
    // const []
    return(
        <HeaderMain>
            <div className="container">
                <figure><img src={logo} alt="Logo Haburgueria" /></figure>
                <div className="box__search">
                    <input placeholder="Digitar Pesquisa" type="text" />
                    <button>Pesquisar</button>
                </div>
            </div>
        </HeaderMain>
    )
}

export default Header;
