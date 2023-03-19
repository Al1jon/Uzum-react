import React from 'react';
import Card from '../Card/Card';
import leftImg from '../../images/leftimg.png'
import { GetProductsContext } from '../Context/GetProductsContext';
import { useContext } from 'react';

const CardList = () => {
  const { loading, setLoading } = useContext(GetProductsContext);
  const { products, setProducts } = useContext(GetProductsContext);

  return (
    <div>
      <h1 className="container mx-auto font-medium mb-5 px-2 text-4xl flex items-center gap-4">Hafta aksiyasi <img className="mt-3" src={leftImg} /></h1>
      <ul className="cards flex flex-wrap gap-7 container mx-auto px-2">
        {loading}
        {products.map((item) => (
          <Card item={item} />
        ))}
      </ul>
    </div >
  );
}

export default CardList;
