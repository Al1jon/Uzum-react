import React from 'react';
import '../Login.scss'
import logo from '../../src/images/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginText }) => {
    setLoginText("Kirish")
    const navigate = useNavigate()
    const submintHandler = (event) => {
        event.preventDefault();
        console.log(form)

        fetch("https://reqres.in/api/login",
            {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json' }
            })
            .then((res) => {
                res.json();
                console.log(res.status)
                if (res.status == 200) {
                    navigate('/');
                    setLoginText("Chiqish")
                }
            })
            .then((data) => {
                localStorage.setItem('token', data)
            })
    }
    const [form, setForm] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    });
    return (
        <>
            <div className="screen mx-auto mt-8">
                <div className="screen__content">
                    <form className="login" onSubmit={submintHandler}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input value={form.email} onChange={(event) => {
                                setForm({
                                    ...form,
                                    email: event.target.value
                                })
                            }} type="text" className="login__input" placeholder="User name / Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input value={form.password} onChange={(event) => {
                                setForm({
                                    ...form,
                                    password: event.target.value
                                })
                            }} type="text" className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3><img src={logo} /></h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>

        </>
    );
}

export default Login;
