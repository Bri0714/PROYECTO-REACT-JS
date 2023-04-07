import React from 'react';
import './CartView.css';
import { useCartContext } from '../../context/CartContext';
import { BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';

const CartView = () => {
    const { cart, removeProduct, clearCart } = useCartContext();

    if (!cart.length) {
        return (
            <div className="text-center my-5">
                <h2>No hay productos en el carrito</h2>
            </div>
        );
    }

    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleClearCart = () => {
        clearCart();
        toast.success('Gracias por su compra!', { position: 'bottom-right' });
    };

    return (
        <div className="container my-5">
            <div className="row">
                {cart.map((product) => (
                    <div key={product.id} className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <img src={product.Image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Precio: ${product.price}</p>
                                <p className="card-text">Cantidad: {product.quantity}</p>
                                <p className="card-text">Subtotal: ${product.quantity * product.price}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeProduct(product.id)}
                                >
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <h4>Total: <strong>${totalPrice.toFixed(2)}</strong></h4>
                <button className="btn btn-primary" onClick={handleClearCart}>Comprar</button>
            </div>
        </div>
    );
};

export default CartView;

