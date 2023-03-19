import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <main className="NotFoundbody container mx-auto">
                <div className="mars"></div>
                <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
                <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    Bu sahifa mavjud emas. Uzrimizni qabul qiling.<br />URL manzilni tekshirib qaytadan urinib ko'ring.
                </p>
                <div align="center">
                    <Link className="btn-back" to={'/'}>Bosh sahifaga o'tish</Link>
                </div>
                <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
            </main>
        </div>
    );
}

export default NotFound;
