import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GetProductsProvider } from './component/Context/GetProductsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GetProductsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GetProductsProvider>
);


