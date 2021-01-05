import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return <ul className="products">
    {
      data.products.map(product => 
      <li>
        <div className="product">
            <Link to={'/product/' + product._id}>{<img className="product-image" src={product.image} alt=""></img>}</Link>
        <div className="product-name">
          <Link to={'/product/' + product._id}>{product.name}</Link>
        </div>
        <div className="product-brand">Varan er frá: {product.brand}</div>
        <div className="product-rating">Um vöruna: {product.rating}</div>
        <div className="product-price">Verð Krónur: {product.price}</div>
      </div>
    </li>)
    }
  </ul>
}
export default HomeScreen;