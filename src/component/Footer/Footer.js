import React from 'react';
import appleImg from '../../images/appleimg.png';
import playImg from '../../images/playimg.png';
import footerImg from '../../images/footerimg.png';

const Footer = () => {
    return (
        <div>
            <footer className="container mx-auto pt-16 pb-5 px-2">
                <ul className="flex justify-between items-baseline  ">
                    <li>
                        <ul>
                            <li className="font-medium">Biz haqimizda</li>
                            <li className="my-4 text-slate-500">Topshirish</li>
                            <li className=" text-slate-500">Vakansiyalar</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-medium">Foydalanuvchilarga</li>
                            <li className="my-4 text-slate-500">Biz bilan bog'lanish</li>
                            <li className=" text-slate-500">Savol-Javob</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-medium">Tadbirkorlarga</li>
                            <li className="my-4 text-slate-500">Uzumda soting</li>
                            <li className="my-4 text-slate-500">Sotuvchi kabinetiga kirish</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-medium">Ilovani yuklab olish</li>
                            <li className="flex gap-2 mb-10 mt-4">
                                <span className="cursor-pointer flex gap-1 items-center"><img src={appleImg} /> AppStore</span>
                                <span className="cursor-pointer flex gap-1 items-center"><img src={playImg} /> Google Play</span>
                            </li>
                            <li className="font-medium mb-4">Uzum ijtimoiy tarmoqda</li>
                            <li>
                                <img className="mb-16 cursor-pointer " style={{width:180}} src={footerImg} />
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                    <div className="py-3">
                        <span className="mr-8 font-medium">Maxfiy kelishuv</span>
                        <span className="font-medium">Foydalanuvchi kelishuv</span>
                    </div>
                    <span className="text-xs">«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>

                </div>
            </footer>
        </div>
    );
}

export default Footer;
