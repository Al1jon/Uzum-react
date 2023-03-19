import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetProductsContext } from '../Context/GetProductsContext';

const Categories = () => {
    const { categories, setCategories } = useContext(GetProductsContext);
    return (

        categories.map((category) => (
            <Link to={`/category/${category}`}>
                <li>{category}</li>
            </Link>
        ))

    );
}

export default Categories;
