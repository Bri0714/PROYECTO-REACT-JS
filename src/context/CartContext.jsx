import React from 'react'

export const CartContext = React.createContext([])
console.log('CartContext:' , CartContext)

export const CartProvider = ({children}) => {
    return (
        <CartContext.Provider values='pedro'>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider