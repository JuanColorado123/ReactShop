import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch(() => setError('No se pudieron cargar los productos'));
    }, []);

    if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="card bg-base-100 w-80 shadow-sm">
                    <figure>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-48 object-contain p-4"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm">{product.title}</h2>
                        <p className="text-green-600 font-bold">${product.price}</p>
                        <div className="card-actions justify-between">
                            <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
