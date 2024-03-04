import React from 'react';
import { products } from '../data/products';
import './ProductList.css';

const ProductList = () => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    </div>
            ))}
        </div>
    );
}

export default ProductList;