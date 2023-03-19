import React from 'react';
import addBasket from '../images/addBasket.png';
import love from '../images/3643770-favorite-heart-like-likes-love-loved_113432.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { GetProductsContext } from '../component/Context/GetProductsContext';
import Card from '../component/Card/Card';

const FavoritePage = () => {
    const { favorites, setFavorites } = useContext(GetProductsContext);

    return (
        <div className="container mx-auto px-2 mt-4">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-3xl">Istaklarim</h1>
                <div className="flex gap-4 items-center">
                    <p>Saralash</p>
                    <span className="min-w-60 px-4 py-2 border-solid border-slate-400 rounded-lg border-2">Ommabop</span>
                </div>
            </div>
            <hr className="mb-4 mt-6" />
            <ul className="flex gap-5 flex-wrap">               
                {favorites.map((item) => (
                    <Card item={item} />
                ))}
            </ul>
        </div>
    );
}

export default FavoritePage;
