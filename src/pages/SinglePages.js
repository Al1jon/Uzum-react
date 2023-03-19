import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { GetProductsContext } from '../component/Context/GetProductsContext';
import 'swiper/css';
import Card from '../component/Card/Card'
import minus from '../../src/images/minus.png';
import plus from '../../src/images/plus.png';
import anons from '../../src/images/reklama.png';
import savat from '../../src/images/savat.png';
import love from '../../src/images/like.png';

const SinglePages = ({ item }) => {
    const [count, setcount] = useState(1);
    const [img, setImg] = useState('');
    const { id } = useParams();
    const { products, setProducts } = useContext(GetProductsContext);
    const { favoritesId, setFavoritesId } = useContext(GetProductsContext);

    // console.log(products);
    const filteredArr = products?.filter((product) => product.id == id);
    const { favorites, setFavorites } = useContext(GetProductsContext);

    return (
        <div>
            <main>
                <div className="container mx-auto px-2 overflow-hidden">
                    <div style={{ height: 620 }} className="flex gap-20">
                        <div className="w-2/5 ">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                navigation
                                autoplay={{ delay: 3000 }}
                            >
                                <SwiperSlide><div className="flex justify-center items-center mt-28"><img style={{ width: 300 }} src={filteredArr[0]?.image} /></div></SwiperSlide>
                                <SwiperSlide><div className="flex justify-center items-center mt-28"><img style={{ width: 300 }} src={filteredArr[0]?.image} /></div></SwiperSlide>
                                <SwiperSlide><div className="flex justify-center items-center mt-28"><img style={{ width: 300 }} src={filteredArr[0]?.image} /></div></SwiperSlide>
                                <SwiperSlide><div className="flex justify-center items-center mt-28"><img style={{ width: 300 }} src={filteredArr[0]?.image} /></div></SwiperSlide>




                            </Swiper>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-400 my-1">⭐️{filteredArr[0]?.description.rating?.rate}4.3({filteredArr[0]?.description.rating?.count}136 ta baho) ko'proq 2500 buyurtma</p>
                                <div className="flex gap-1 cursor-pointer" onClick={(evt) => { (!favoritesId.includes(filteredArr[0].id)) ? setFavorites([...favorites, filteredArr[0]]) : setFavorites(favorites.filter((product) => product.id != filteredArr[0].id))}}><img style={{ width: 30 }} src={love} /><span> Istaklarga</span></div>
                            </div>
                            <h3 className="font-medium text-3xl">{filteredArr[0]?.title}</h3>
                            <span className="mr-20">Sotuvchi:</span><span className="underline font-medium">Perfecto exclusive</span>
                            <p>Yetkazib berish:<span className="ml-5 text-slate-500">1 kun bepul.</span></p>
                            <hr className="my-5" />
                            <p className="mb-2">Miqdor:</p>
                            <button className="mb-4 flex gap-8 px-3 py-2  items-center border-solid border-slate-400 rounded-xl border-2"><img onClick={(evt) => { if (count > 0) { setcount(count - 1) } }} src={minus} />{count}<img onClick={(evt2) => { setcount(count + 1) }} src={plus} /></button>
                            <p>Narx:</p>
                            <h3 className="font-medium text-2xl">{count * filteredArr[0]?.price} so'm</h3>
                            <img src={anons} />
                            <p className="my-4 p-4 bg-slate-200 w-full rounded-2xl"><span className="bg-yellow-400 px-4 py-2 rounded-lg">Oyiga 9600 so'mdan</span> muddatli to'lov</p>
                            <div className="flex gap-2">
                                <button className="w-1/2 py-3 rounded-xl bg-blue-800 text-white">Savatga qo'shish</button>
                                <button className="w-1/2 py-3 rounded-xl border-solid border-2 border-blue-800 text-blue-800">Tugmani bir bosishda xarid qilish</button>
                            </div>
                            <p style={{ backgroundColor: "#fff7c1" }} className="my-5 px-4 py-2 rounded-xl w-full flex items-center"><img style={{ width: 30 }} src={savat} /> Bu haftada 2150 kishi sotib oldi</p>
                        </div>
                    </div>
                    
                    <hr className="my-20" />

                    <p className="mx-auto w-3/4 mb-20">{filteredArr[0]?.description}</p>
                    <ul className="flex pb-6 gap-3 min-w-full overflow-hidden">
                        {products.map((item) => (
                            <Card item={item} />
                        ))}
                    </ul>
                </div>

            </main>
        </div>
    );
}

export default SinglePages;
