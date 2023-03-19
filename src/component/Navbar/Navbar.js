import React from 'react';
import { useContext } from 'react';
import { GetProductsContext } from '../Context/GetProductsContext';
import more from '../../images/Path.svg';
import Categories from './Categories';

const Navbar = ({ item }) => {

    const { categories, setCategories } = useContext(GetProductsContext);

    return (
        <div>
            <nav className="container mx-auto px-2 mb-2">
                <ul className="flex justify-between items-center text-slate-500">
                    
                    <Categories />
                    <li className="flex gap-1 items-center">Yana<img src={more} /></li>

                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
