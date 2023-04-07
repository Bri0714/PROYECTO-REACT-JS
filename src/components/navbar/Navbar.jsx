import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Navbar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { cart } = useCartContext();
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        let totalItems = 0;
        for (const product of cart) {
            totalItems += product.quantity;
        }
        setCartLength(totalItems);
    }, [cart]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-green">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="./img/logo.jpg" className="logo" alt="Logo Tienda de Deportes" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Carrito" className="nav-link">
                                Carrito <BsCart2 className="car" />
                                {cartLength > 0 && (
                                    <span className="carrito-cantidad">{cartLength}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input
                            id="Buscador"
                            className="form-control me-2"
                            type="search"
                            placeholder="Busca tu producto preferido"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button id="Boton" className="btn btn-outline-light" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;