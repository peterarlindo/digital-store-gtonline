import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductListingProps {
  products: Product[];
  cols?: number; // Número de colunas por linha (opcional)
}

export const ProductListing: React.FC<ProductListingProps> = ({ products, cols = 4 }) => {
  // Se cols for 3 (Página de produtos), usa col-md-4 (3 por linha em 9 colunas).
  // Se for 4 (Home), usa col-md-3 (4 por linha em 12 colunas).
  const bootstrapColClass = cols === 3 ? "col-12 col-sm-6 col-md-4" : "col-12 col-sm-6 col-md-3";

  return (
    <div className="row g-3">
      {products.map((product) => (
        <div key={product.id} className={bootstrapColClass}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};