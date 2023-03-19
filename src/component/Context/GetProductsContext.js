import React from 'react';
import { createContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const GetProductsContext = createContext();

const GetProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [favoritesId, setFavoritesId] = useState([]);
    const [loading, setLoading] = useState(<h1 className="mx-auto mt-30 font-medium text-3xl">Loading . . .</h1>);
    const [categorysProduct, setCategorysProduct] = useState([]);


    useEffect(() => {
        if (favorites.length != 0) {
            for (let i = 0; i < favorites.length; i++) {
                // setFavoritesId([...favoritesId, favorites[i].id])
                if (!favoritesId.includes(favorites[i].id)) {
                    setFavoritesId([...favoritesId, favorites[i].id])
                }
                else {
                    setFavoritesId(favoritesId.filter((id) => id != favorites[i].id))
                }
            }
        }
        else {
            setFavoritesId([])
        }
        
    }, [favorites]);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
                setLoading('')
            })
            .catch((err) => console.error(err));

    }, []);



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then((response) => response.json())
            .then((response) => {
                setCategories(response);
            })
            .catch((err) => console.error(err));

    }, []);

    return (
        <GetProductsContext.Provider value={{ products, setProducts, categories, setCategories, favorites, setFavorites, favoritesId, setFavoritesId, categorysProduct, setCategorysProduct, loading, setLoading }}>
            {children}
        </GetProductsContext.Provider>
    );
}

export { GetProductsContext, GetProductsProvider };
