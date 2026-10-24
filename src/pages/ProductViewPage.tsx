import { Layout } from '../components/Layout/Layout';
import React from 'react';
import { Gallery } from '../components/Gallery/Gallery';
import { BuyBox } from '../components/BuyBox/BuyBox';
import { ProductListing } from '../components/ProductListing/ProductListing';
import { Section } from '../components/Section/Section';
import { Product } from '../types';

export const ProductViewPage: React.FC = () => {
  const productImages = [
    { src: '/product-thumb-6.jpeg' },
    { src: '/product-thumb-6.jpeg' },
    { src: '/product-thumb-6.jpeg' },
    { src: '/product-thumb-6.jpeg' },
    { src: '/product-thumb-6.jpeg' }
  ];

const relatedProducts: Product[] = [
    { id: 2, name: 'Tênis Nike Revolution 6 Next Nature Masculino', image: '/product-thumb-6.jpeg', price: 250, priceDiscount: 199, category: 'Casual' },
    { id: 3, name: 'Tênis Adidas Grand Court', image: '/product-thumb-3.jpeg', price: 300, priceDiscount: 229, category: 'Esporte' },
    { id: 4, name: 'Tênis Puma Shuffle', image: '/product-thumb-4.jpeg', price: 280, priceDiscount: 210, category: 'Casual' },
    { id: 5, name: 'Tênis Vans Old Skool', image: '/product-thumb-5.jpeg', price: 350, priceDiscount: 299, category: 'Casual' },
    { id: 6, name: 'Tênis Nike Revolution 6', image: '/product-thumb-2.jpeg', price: 350, priceDiscount: 299, category: 'Casual' }
  ];

return (
  <Layout>
    <div className="container py-5">
      <div className="row g-5 mb-5">
        <div className="col-12 col-md-7">
          <Gallery images={productImages} height="570px" radius="4px" showThumbs={true} />
        </div>

        <div className="col-12 col-md-4">
  <style>
    {`
      .gap-3 {
        gap: 0.7rem !important;
      }
    `}
  </style>
  <BuyBox 
    name="Tênis Nike Revolution 6 Next Nature Masculino"
    reference="Casual | Nike | REF:38416711"
    stars={4.7}
    rating={90}
    price={200}
    priceDiscount={149}
    description="Tênis K-Swiss V8 Masculino com design moderno, conforto prolongado para o dia a dia e solado antiderrapante de alta durabilidade."
  />
</div>
      </div>

      <div className="mt-5">
        <Section title="Produtos recomendados" link={{ text: 'Ver todos →', href: '/products' }}>
          <ProductListing products={relatedProducts} />
        </Section>
      </div>
    </div>
  </Layout>
);
};