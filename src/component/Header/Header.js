import React from 'react';
import { useContext } from 'react';
import { GetProductsContext } from '../Context/GetProductsContext';
import logo from '../../images/logo.png';
import katalog from '../../images/katalog1.png';
import userlogo from '../../images/user.png';
import like from '../../images/like.png';
import savat from '../../images/basket.png';
import lupa from '../../images/Shape.svg';
import { Link } from 'react-router-dom';
const Header = ({ loginText }) => {
    const { favorites } = useContext(GetProductsContext);
    return (
        <div>
            <header className="flex justify-between items-center container mx-auto pt-6 pb-3 px-2">
                <Link to={'/'}><img src={logo} style={{ width: 215, height: 36 }} className="mr-4" /></Link>
                <button className="btn-katalog flex items-center px-4"><img src={katalog} style={{ width: 30, height: 30 }} />Katalog</button>
                <div className="relative w-2/5 mr-3">
                    <input type={'text'} className="input" placeholder='Mahsulotlar va turkumlar izlash' />
                    <button className="absolute btn-lupa"><img src={lupa} /></button>
                </div>
                <Link to={'/login'}><button className="btn flex items-center gap-2"><img src={userlogo} style={{ width: 26, height: 26 }} />{loginText}</button></Link>
                <Link to={'/favorite'}><button className="btn relative flex items-center gap-2"><img src={like} style={{ width: 26, height: 26 }} />Saralangan <span className="absolute bottom-6 left-9  rounded-3xl px-2 bg-red-500 text-white">{favorites.length}</span></button></Link>
                <button className="btn flex items-center gap-2"><img src={savat} style={{ width: 26, height: 26 }} />Savat</button>
            </header>
        </div>
    );
}

export default Header;
