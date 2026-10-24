import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../types';

export const ProductCard: React.FC<ProductCardProps> = ({
  id = 1,
  image,
  name,
  price,
  priceDiscount,
  category
}) => {
  return (
    <Link to={`/product/${id}`} className="text-decoration-none h-100 d-block">
      <div
        className="card border-0 bg-transparent h-100 position-relative"
        style={{ width: '100%', maxWidth: '292px' }}
      >
        {priceDiscount && (
          <span
            className="badge position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill fw-bold z-1"
            style={{
              backgroundColor: '#E7FF86',
              color: '#474747',
              fontSize: '14px'
            }}
          >
            {Math.round(((price - priceDiscount) / price) * 100)}% OFF
          </span>
        )}

        <div
          className="bg-white rounded-3 d-flex align-items-center justify-content-center p-4 shadow-sm mb-2"
          style={{ height: '321px' }}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid object-fit-contain"
            style={{ maxHeight: '100%' }}
          />
        </div>

        <div className="card-body p-0">
          <small
            className="text-light-gray fw-bold d-block mb-1"
            style={{ fontSize: '13px' }}
          >
            {category || 'Tênis'}
          </small>

          <h3
            className="card-title text-dark-gray-2 fw-normal mb-2"
            style={{ fontSize: '24px', lineHeight: '38px' }}
          >
            {name}
          </h3>

          <div className="d-flex align-items-center gap-2">
            {priceDiscount ? (
              <>
                <span
                  className="text-decoration-line-through text-light-gray"
                  style={{ fontSize: '24px' }}
                >
                  R$ {price.toFixed(2).replace('.', ',')}
                </span>

                <span
                  className="text-dark-gray fw-bold"
                  style={{ fontSize: '24px' }}
                >
                  R$ {priceDiscount.toFixed(2).replace('.', ',')}
                </span>
              </>
            ) : (
              <span
                className="text-dark-gray fw-bold"
                style={{ fontSize: '24px' }}
              >
                R$ {price.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};