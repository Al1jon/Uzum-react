import React from 'react';
import addBasket from '../../images/addBasket.png';
import love from '../../images/3643770-favorite-heart-like-likes-love-loved_113432.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GetProductsContext } from '../Context/GetProductsContext';

const Card = ({ item }) => {
    const { favorites, setFavorites } = useContext(GetProductsContext);
    const { favoritesId, setFavoritesId } = useContext(GetProductsContext);

    return (

        <li key={item.id} className="product overflow-hidden">
            <div className="img-box flex items-center justify-center relative">
                <img onClick={(evt) => { (!favoritesId.includes(item.id)) ? setFavorites([...favorites, item]) : setFavorites(favorites.filter((product) => product.id != item.id))}} className="absolute z-50 top-2 right-1 cursor-pointer" style={{ width: 24 }} src={love} />
                <Link to={`/singlepages/${item.id}`}>
                    <img style={{ width: 150 }} src={item.image} /></Link>
                <span className="rounded-lg px-1 absolute bottom-0 left-0 bg-purple-800 text-white">Aksiya</span>
            </div><Link to={`/singlepages/${item.id}`}>
                <div className="p-2 flex flex-col justify-between">
                    <div>
                        <h3>{(item.title.length > 20) ? item.title.substring(0, 18) + '. . .' : item.title}</h3>
                        <p className="text-slate-400 my-1">⭐️{item.rating.rate}({item.rating.count} ta baho)</p>
                        <span className="bg-yellow-300 rounded-lg px-1">{(`${item.price / .6}`.substring(0, 4))}so'm/oyiga</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-xl">{item.price}0 so'm</p>
                        <img className="cursor-pointer" style={{ width: 40 }} src={addBasket} />
                    </div>
                </div> </Link>
        </li>
    )

}

export default Card;



