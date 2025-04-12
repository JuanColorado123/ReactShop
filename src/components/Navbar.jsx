import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de importar el contexto

export const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Total de productos en el carrito

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Store-Parcial</Link>
            </div>
            <Link to='/cart' className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            {totalItems > 0 && (
                            <span className="badge badge-sm indicator-item">{totalItems}</span>
                        )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
