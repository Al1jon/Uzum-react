import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from "./pages/Home";
import SinglePages from './pages/SinglePages';
import CategoryPage from './pages/CategoryPage';
import FavoritePage from './pages/FavoritePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {

  const [loginText, setLoginText] = useState('Kirish');
 
  return (

    <div className="App overflow-hidden">
      <Header loginText={loginText} setLoginText={setLoginText}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singlepages/:id' element={<SinglePages/>}/>
        <Route path='/category/:category' element={<CategoryPage/>}/>
        <Route path='/favorite' element={<FavoritePage/>}/>
        <Route path='/login' element={<Login setLoginText={setLoginText}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
