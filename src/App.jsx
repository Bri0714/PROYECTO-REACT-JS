import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import ProductList from './components/productList/ProductList';
import ProductItem from './components/ProductItem/ProductItem';
import './App.css';
import Navbar from './components/navbar/Navbar';
import db from '../db/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';
import CartProvider from './context/CartContext';
import CartView from './components/CartView/CartView';



function App() {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const productosCollectionref = collection(db, 'productos');

  const getProductos = async () => {
    const productosSnapshot = await getDocs(productosCollectionref);
    setProductos(
      productosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredProductos = productos.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <body>
      <CartProvider>
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div>
        <div className='titulos'>
          <h1 className='text-center title'>FABY SPORTS</h1>
        </div>
        <Routes>
          <Route path='/' element={<Navigate to='Home' />} />
          <Route path='/Home' element={<Home />} />
          <Route
            path='/productos'
            element={<ProductList productos={filteredProductos} />}
          />
          <Route
            path='/productos/:id'
            element={<ProductItem productos={productos} />}
          />
          <Route path='/Carrito' element={<CartView />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />

        </Routes>
      </div>
      <Footer/>
      </CartProvider>
    </body>
  );
}

export default App
