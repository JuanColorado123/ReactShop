import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="card bg-base-100 w-80 shadow-sm mb-4">
                                <figure>
                                    <img src={item.image} alt={item.title} className="h-48 object-contain p-4" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-sm">{item.title}</h2>
                                    <p className="text-green-600 font-bold">${item.price} x {item.quantity}</p>
                                    <div className="card-actions justify-between">
                                        <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className="font-bold text-lg">Total: ${total}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
