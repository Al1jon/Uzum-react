import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../component/Card/Card';
import { GetProductsContext } from '../component/Context/GetProductsContext';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import addBasket from '../images/addBasket.png';
import love from '../images/3643770-favorite-heart-like-likes-love-loved_113432.svg';

const Category = () => {
    var { category } = useParams()

    const { favorites, setFavorites } = useContext(GetProductsContext);
    const { categorysProduct, setCategorysProduct } = useContext(GetProductsContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => response.json())
            .then((response) => {
                setCategorysProduct(response);
            })
            .catch((err) => console.error(err));

    }, [category]);

    return (
        <div className="container mx-auto px-2 mt-4">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-3xl">{category}</h1>
                <div className="flex gap-4 items-center">
                    <p>Saralash</p>
                    <span className="min-w-60 px-4 py-2 border-solid border-slate-400 rounded-lg border-2">Ommabop</span>
                </div>
            </div>
            <hr className="mb-4 mt-6" />
            <div className="flex">
                <div style={{ minWidth: 300 }}>
                    <h3 className="font-medium text-xl">Turkumlar</h3>
                    <ul className="ml-3 mt-2">
                        <li className="text-slate-500 my-4">Barcha turkumlar</li>
                        <li className="text-slate-500 my-4">Elektronika</li>
                        <li className="text-slate-500 my-4">Oʻyin pristavkalari</li>
                        <li className="text-slate-500 my-4">Kvadrokopterlar va aksessuarlar</li>
                        <li className="text-slate-500 my-4">Kompyuter texnikasi</li>
                        <li className="text-slate-500 my-4">Navigatorlar</li>
                        <li className="text-slate-500 my-4">Quloqchinlar va audio texnikalar</li>
                        <li className="text-slate-500 my-4">Noutbuklar, planshetlar va<br></br>elektron kitoblar</li>
                        <li className="text-slate-500 my-4">Optik anjomlar</li>
                        <li className="text-slate-500 my-4">Elektronika</li>
                        <li className="text-slate-500 my-4">Oʻyin pristavkalari</li>
                        <li className="text-slate-500 my-4">Kvadrokopterlar va aksessuarlar</li>
                        <li className="text-slate-500 my-4">Kompyuter texnikasi</li>
                        <li className="text-slate-500 my-4">Navigatorlar</li>
                        <li className="text-slate-500 my-4">Quloqchinlar va audio texnikalar</li>
                        <li className="text-slate-500 my-4">Noutbuklar, planshetlar va elektron kitoblar</li>
                        <li className="text-slate-500 my-4">Optik anjomlar</li>
                    </ul>
                </div>
                <ul className="flex flex-wrap gap-2">
                    {categorysProduct.map((item) => (
                        <Card item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
