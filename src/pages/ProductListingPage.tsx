import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { ProductListing } from '../components/ProductListing/ProductListing';
import { FilterGroup } from '../components/FilterGroup/FilterGroup';
import { Product } from '../types';

export const ProductListingPage: React.FC = () => {
  const [sortOrder, setSortOrder] = useState('relevantes');

  const products: Product[] = [
    { id: 1, name: 'K-Swiss V8 - Masculino', image: '/produc-image-1.jpeg', price: 200, priceDiscount: 100 },
    { id: 2, name: 'K-Swiss V8 - Masculino', image: '/produc-image-2.jpeg', price: 200, priceDiscount: 100 },
    { id: 3, name: 'K-Swiss V8 - Masculino', image: '/produc-image-3.jpeg', price: 200 },
    { id: 4, name: 'K-Swiss V8 - Masculino', image: '/produc-image-4.jpeg', price: 200 },
    { id: 5, name: 'K-Swiss V8 - Masculino', image: '/produc-image-5.jpeg', price: 200 },
    { id: 6, name: 'K-Swiss V8 - Masculino', image: '/produc-image-6.jpeg', price: 200 },
  ];


  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'menor') {
      return (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price);
    }
    if (sortOrder === 'maior') {
      return (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price);
    }
    return 0;
  });

  return (
    <Layout>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0" style={{ fontSize: '16px' }}>
            <span className="fw-bold">Resultados para "Tênis"</span> - {products.length} produtos
          </h5>
          <div 
            className="d-flex align-items-center position-relative rounded px-3 bg-white"
            style={{ 
              border: '1px solid #474747', 
              height: '60px', 
              width: '330px' 
            }}
          >
            <span className="fw-bold me-1 text-nowrap" style={{ color: '#474747', fontSize: '17px' }}>
              Ordenar por:
            </span>
            <select
              className="form-select border-0 shadow-none p-0 bg-transparent"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ 
                cursor: 'pointer', 
                color: '#474747',
                outline: 'none'
              }}
            >
              <option value="relevantes">mais relevantes</option>
              <option value="menor">menor preço</option>
              <option value="maior">maior preço</option>
            </select>
          </div>
        </div>

        <div className="row">
          {/* Barra Lateral de Filtros */}
          <div className="col-12 col-md-3">
            <div className="bg-white p-3 rounded-3 mb-4">
              <h6 className="fw-bold mb-3">Filtrar por</h6>
              <hr />

              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={[
                  { text: 'Adidas', value: 'adidas' },
                  { text: 'Calenciaga', value: 'calenciaga' },
                  { text: 'K-Swiss', value: 'kswiss' },
                  { text: 'Nike', value: 'nike' },
                  { text: 'Puma', value: 'puma' },
                ]}
              />

              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { text: 'Esporte e lazer', value: 'esporte-e-lazer' },
                  { text: 'Casual', value: 'casual' },
                  { text: 'Utilitário', value: 'utilitario' },
                  { text: 'Corrida', value: 'corrida' },
                ]}
              />

              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={[
                  { text: 'Masculino', value: 'masculino' },
                  { text: 'Feminino', value: 'feminino' },
                  { text: 'Unisex', value: 'unisex' },
                ]}
              />

              <FilterGroup
                title="Estado"
                inputType="radio"
                options={[
                  { text: 'Novo', value: 'novo' },
                  { text: 'Usado', value: 'usado' },
                ]}
              />
            </div>
          </div>

          {/* Grid de Produtos (3 produtos por linha) */}
          <div className="col-12 col-md-9">
            <ProductListing products={sortedProducts} cols={3} />
          </div>
        </div>
      </div>
    </Layout>
  );
};