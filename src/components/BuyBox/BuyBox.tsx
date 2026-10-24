import React from 'react';
import { BuyBoxProps } from '../../types';
import { ProductOptions } from '../ProductOptions/ProductOptions';

export const BuyBox: React.FC<BuyBoxProps> = ({
  name,
  reference,
  stars = 0,
  rating = 0,
  price = 0,
  priceDiscount,
  description
}) => {
  const safePrice = price ?? 0;
  const safeDiscount = priceDiscount ?? 0;

  const sizes = ['39', '40', '41', '42', '43'];
  const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

  // Função para gerar as 5 estrelas (cheias e vazias igual à imagem)
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(stars);
    let starsElements = [];

    for (let i = 1; i <= totalStars; i++) {
      starsElements.push(
        <span key={i} style={{ color: i <= filledStars ? '#F6AA1C' : '#CCCCCC', fontSize: '20px', marginRight: '2px' }}>
          ★
        </span>
      );
    }
    return starsElements;
  };

  const currentPrice = safeDiscount > 0 ? safeDiscount : safePrice;
  const priceParts = currentPrice.toFixed(2).split('.');
  const integerPart = priceParts[0];
  const decimalPart = priceParts[1];

  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="fw-bold text-dark-gray mb-0" style={{ fontSize: '32px', color: '#1F1F1F' }}>
        {name}
      </h2>
      <p className="text-light-gray mb-0" style={{ fontSize: '12px', color: '#666666' }}>
        {reference}
      </p>
      
      {/* Bloco de Avaliações idêntico à imagem */}
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex">
          {renderStars()}
        </div>
        <span className="badge text-white px-2 py-1 fw-bold d-flex align-items-center gap-1" style={{ backgroundColor: '#F6AA1C', fontSize: '14px', borderRadius: '4px' }}>
          {stars} ★
        </span>
        <span className="text-muted" style={{ fontSize: '14px', color: '#666666' }}>
          ({rating} avaliações)
        </span>
      </div>

      {/* Bloco de Preços idêntico à imagem */}
      <div className="d-flex align-items-baseline gap-2 mb-2">
        <span className="text-muted fs-5" style={{ color: '#474747' }}>R$</span>
        <span className="fw-bold" style={{ fontSize: '36px', color: '#1F1F1F', lineHeight: '1' }}>
          {integerPart},{decimalPart}
        </span>
        {safeDiscount > 0 && (
          <span className="text-decoration-line-through text-muted ms-2" style={{ fontSize: '16px', color: '#CCCCCC' }}>
            R$ {safePrice.toFixed(2).replace('.', ',')}
          </span>
        )}
      </div>

      <div>
        <p className="fw-bold mb-1" style={{ fontSize: '14px', color: '#8F8F8F' }}>Descrição do produto</p>
        <p style={{ fontSize: '14px', color: '#474747', lineHeight: '1.6' }}>{description}</p>
      </div>

      <div>
        <span className="d-block mb-2 fw-bold" style={{ fontSize: '14px', color: '#8F8F8F' }}>Tamanho</span>
        <ProductOptions options={sizes} type="text" />
      </div>

      <div>
        <span className="d-block mb-2 fw-bold" style={{ fontSize: '14px', color: '#8F8F8F' }}>Cor</span>
        <ProductOptions options={colors} type="color" />
      </div>

    <button 
  className="btn fw-bold mt-3 shadow-sm" 
  style={{
    backgroundColor: '#F6AA1C',
    color: '#FFFFFF',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    width: '220px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  COMPRAR
</button>
    </div>
  );
};