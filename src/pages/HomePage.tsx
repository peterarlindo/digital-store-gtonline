import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Gallery } from '../components/Gallery/Gallery';
import { Section } from '../components/Section/Section';
import { ProductListing } from '../components/ProductListing/ProductListing';
import { Product } from '../types';

export const HomePage: React.FC = () => {
  const galleryImages = [
    { src: '/d52bcba86d839d9bc81eba71990cf69a20c77364.png' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
    { src: '/home-slide-4.jpeg' },
  ];

  const products: Product[] = [
    { id: 1, name: 'K-Swiss V8 - Masculino', image: '/produc-image-1.jpeg', price: 200, priceDiscount: 100 },
    { id: 2, name: 'K-Swiss V8 - Masculino', image: '/produc-image-2.jpeg', price: 200, priceDiscount: 100 },
    { id: 3, name: 'K-Swiss V8 - Masculino', image: '/produc-image-3.jpeg', price: 200, priceDiscount: 100 },
    { id: 4, name: 'K-Swiss V8 - Masculino', image: '/produc-image-4.jpeg', price: 200, priceDiscount: 100 },
    { id: 5, name: 'K-Swiss V8 - Masculino', image: '/produc-image-5.jpeg', price: 200 },
    { id: 6, name: 'K-Swiss V8 - Masculino', image: '/produc-image-1.jpeg', price: 200 },
    { id: 7, name: 'K-Swiss V8 - Masculino', image: '/produc-image-2.jpeg', price: 200 },
    { id: 8, name: 'K-Swiss V8 - Masculino', image: '/produc-image-3.jpeg', price: 200 },
  ];

  const categories = [
    { name: 'Camisetas', image: '/Camisetas.png', link: '/products?filter=camisetas' },
    { name: 'Calças', image: '/calcas.png', link: '/products?filter=calcas' },
    { name: 'Bonés', image: '/bones.png', link: '/products?filter=bones' },
    { name: 'Headphones', image: '/headphones.png', link: '/products?filter=headphones' },
    { name: 'Tênis', image: '/tenis.png', link: '/products?filter=tenis' },
  ];

  return (
    <Layout>
      {/* Banner Principal / Hero */}
      <Gallery
        images={galleryImages}
        height="681px"
        className="home-hero-gallery"
      />

      {/* Coleções em Destaque (Cards) */}
      <div className="container py-5">
        <Section title="Coleções em destaque">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="position-relative overflow-hidden rounded-4 shadow-sm bg-light">
                <img 
                  src="/collection-1.png" 
                  alt="Novo drop Supreme" 
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', height: '240px' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="position-relative overflow-hidden rounded-4 shadow-sm bg-light">
                <img 
                  src="/collection-2.png" 
                  alt="Coleção Adidas" 
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', height: '240px' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="position-relative overflow-hidden rounded-4 shadow-sm bg-light">
                <img 
                  src="/collection-3.png" 
                  alt="Novo Beats Bass" 
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', height: '240px' }}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Coleções em Destaque (Ícones Clicáveis das Categorias) */}
        <div className="mt-5 text-center">
          <h5 
  className="fw-bold mb-4 text-dark-gray-2"
  style={{ fontSize: '24px' }}
>
  Coleções em destaque
</h5>
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={cat.link} 
                className="text-decoration-none d-inline-block transition-hover"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="img-fluid"
                  style={{ maxHeight: '130px', objectFit: 'contain' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

     {/* Produtos em Alta */}
      <div className="container pb-5">
        <Section 
          title="Produtos em alta" 
          link={{ 
            text: (
              <span className="d-inline-flex align-items-center gap-1">
                Ver todos
                <img 
                  src="/Right 24px.png" 
                  alt="Seta" 
                  style={{ width: '20px', height: '20px', objectFit: 'contain' }} 
                />
              </span>
            ) as unknown as string, 
            href: '/products' 
          }}
        >
          <ProductListing products={products} />
        </Section>
      </div>

      {/* Banner Especial: Air Jordan edição de colecionador */}
      <div className="bg-white py-5 my-5 border-top border-bottom">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6 text-center">
              <div 
  className="rounded-circle d-flex align-items-center justify-content-center position-relative mx-auto"
  style={{
    background: 'linear-gradient(rgb(66 0 255 / 14%) 0%, rgb(255 255 255 / 0%) 64%)',
    width: '466px',
    height: '466px',
    maxWidth: '100%'
  }}
>
                <img 
  src="/Laye 1.png" 
  alt="Air Jordan edição de colecionador" 
  className="img-fluid rounded-4"
  style={{ 
    width: '120%', 
    maxWidth: '120%', 
    maxHeight: '420px', 
    objectFit: 'contain' 
  }}
/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <span className="text-primary-drip fw-bold mb-2 d-block">Oferta especial</span>
              <h2 className="display-5 fw-bold text-dark-gray mb-3">
                Air Jordan edição de colecionador
              </h2>
              <p className="text-secondary mb-4" style={{ maxWidth: '480px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link 
                to="/products" 
                className="btn btn-primary px-5 py-1 fw-bold rounded-3 text-white"
                style={{ backgroundColor: '#C92071', borderColor: '#C92071' }}
              >
                Ver Oferta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};