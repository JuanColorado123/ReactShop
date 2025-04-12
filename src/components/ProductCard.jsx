import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch(() => setError('No se pudo cargar el producto'));
    }, [id]);

    if (error) return <p className="error-message">{error}</p>;
    if (!product) return <p className="loading">Cargando...</p>;

    return (
        <div className="product-card">
            <figure className="product-image">
                <img src={product.image} alt={product.title} className="image" />
            </figure>
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-category">
                    <strong>Categoría:</strong> {product.category}
                </p>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <div className="actions">
                    <button
                        onClick={() => addToCart(product)}
                        className="add-to-cart-btn"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
