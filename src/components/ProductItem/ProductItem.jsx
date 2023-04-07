import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

export const ProductItem = ({ productos }) => {

    const { id } = useParams();
    const producto = productos.find((producto) => producto.id == id)
    const [cantidad, setCantidad] = useState(1);
    const [goToCart, setGoToCart] = useState(false)
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        addProduct(producto, quantity)
        setGoToCart(true)
    }

    const agregarProducto = () => {
        setCantidad(cantidad + 1);
    }

    const desagregarProducto = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="card border-primary mb-3">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={producto.Image} width={200} height={500} className="card-img" style={{ minHeight: '500px' }} alt="..." />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <h4 className="card-text">{producto.category}</h4>
                        <p className="card-text">{producto.description}</p>
                        <p className="card-text"> $ {producto.price}</p>
                        <p className='card-text'>rating: {producto.rating.rate}</p>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-secondary" onClick={desagregarProducto}>-</button>
                                <span className="btn btn-primary">{cantidad}</span>
                                <button type="button" className="btn btn-secondary" onClick={agregarProducto}>+</button>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem

