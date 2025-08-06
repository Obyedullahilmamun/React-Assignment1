/* eslint-disable react/prop-types */

import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
