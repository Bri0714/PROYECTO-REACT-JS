import React from 'react'
import './Cart.css'
import { useCartContext } from '../context/CartContext'

export const Cart = ({producto}) => {
    const {removeProduct} = useCartContext()
    return (
        <div className='itemcart'>
            <img src={producto.Image} alt={producto.title} />
            <div>
                <p>Titulo:{producto.title}</p>
                <p>Precio:{producto.price}</p>
                <p>Cantidad:{producto.quantity}</p>
                <p>SubTotal: ${producto.quantity * producto.price}</p>
                <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Cart
