import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ProductItem = ({ productos }) => {
    
    const titulo = useContext(CartContext)
    console.log('titulo:', titulo)

    const { id } = useParams();
    const producto = productos.find((producto) => producto.id == id)
    const [cantidad, setCantidad] = useState(1); 

    const agregarProducto = () => {
        setCantidad(cantidad + 1);
    }

    const desagregarProducto = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div>
            <div className="card">
                <img src={producto.Image} width={70} height={70} className="card-img-top" alt="..." />
                <div>
                    <h5 className="card-title text-center">{producto.title}</h5>
                    <h4 className='text-center'>{producto.category}</h4>
                    <p className="card-text text-center">{producto.description}</p>
                    <p className="card-text text-center"> $ {producto.price}</p>
                    <p className='text-center'>rating: {producto.rating.rate}</p>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary" onClick={desagregarProducto}>-</button>
                            <span className="btn btn-primary">{cantidad}</span>
                            <button type="button" className="btn btn-secondary" onClick={agregarProducto}>+</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" onClick={() => console.log(`Compraste ${cantidad} ${producto.title}`)}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem


