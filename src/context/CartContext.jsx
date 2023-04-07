import React from 'react'
import { useState } from 'react'

const CartContext = React.createContext([])
export const useCartContext = () => React.useContext(CartContext)



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    /*
    const addProduct = (producto, newQuantity) => {
        const newCart = cart.filter(product => product.id !== producto.id)
        newCart.push({ ...producto, quantity: newQuantity })
        setCart(newCart)
    }
    */

    const addProduct = (producto, newQuantity) => {
        if (isInCart(producto.id)){
            setCart(cart.map(product => {
                return  product.id === producto.id ? { ...product, quantity: product.quantity + newQuantity } : product
            }))
        }else{
            setCart([...cart, { ...producto, quantity: newQuantity }])
        }
    }

    const TotalPrice = () =>{
        return cart.reduce((prev,act) => prev + act.quantity * act.price,0)
    }

    const TotalProducts = () =>{
        return cart.reduce((acumulador,ProductoActual) => acumulador  + ProductoActual.quantity,0)
    }


    console.log('carrito:', cart)

    const clearCart = () => setCart([]) // limpiar carrito

    const isInCart = (id) => cart.find((item) => item.id === id) // chequear si el item esta en el carrito

    const removeProduct = (id) => setCart(cart.filter((item) => item.id !== id)) // remover item del carrito

    return (
        <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct,  TotalPrice, TotalProducts, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider