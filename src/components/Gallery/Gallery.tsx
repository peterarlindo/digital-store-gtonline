import React, { useState } from 'react';
import { GalleryProps } from '../../types';

export const Gallery: React.FC<GalleryProps> = ({
  images,
  width = '100%',
  height = '681px',
  radius = '4px',
  showThumbs = false,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const isHomeHero = className.includes('home-hero-gallery');

  // Funções para permitir o arraste/swipe com o mouse ou toque
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ('touches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd(e.clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePrev = () => {
  setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
};

const handleNext = () => {
  setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
};

  return (
    <div
      className={`gallery-container position-relative ${className}`}
      style={{ width }}
    >
      <div
        className="main-slide overflow-hidden position-relative"
        style={{
          height,
          borderRadius: radius,
          background: isHomeHero ? '#f5f5f5' : '#E2E3FF',
          cursor: 'grab'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onTouchStart}
        onMouseMove={onTouchMove}
        onMouseUp={onTouchEnd}
      >
        {isHomeHero && (
          <div
            className="position-absolute top-50 translate-middle-y"
            style={{
              left: '7.8%',
              width: '38%',
              zIndex: 2
            }}
          >
            <p
              className="fw-bold mb-3"
              style={{
                color: '#f6aa1c',
                fontSize: '16px',
                letterSpacing: '0.5px'
              }}
            >
              Melhores ofertas personalizadas
            </p>

            <h1
              className="fw-bold mb-3"
              style={{
                color: '#1f1f1f',
                fontSize: 'clamp(32px, 4.5vw, 64px)',
                lineHeight: 1.03
              }}
            >
              Queima de <br />
              estoque Nike{' '}
              <img 
                src="/queima.png" 
                alt="Queima de estoque" 
                style={{ 
                  height: '1.2em',
                  objectFit: 'contain',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginLeft: '3px',
                  marginTop: '-19px'
                }} 
              />
            </h1>

            <p
              className="mb-4"
              style={{
                color: '#474747',
                fontSize: '18px',
                lineHeight: 1.9
              }}
            >
              Confira nossas ofertas especiais e encontre
              o tênis ideal para você.
            </p>

            <button
              type="button"
              className="btn text-white fw-bold"
              style={{
                background: '#c92071',
                borderRadius: '8px',
                width: '220px',
                height: '48px'
              }}
              onClick={() => {
                window.location.href = '/products';
              }}
            >
              Ver Ofertas
            </button>
          </div>
        )}

        {/* Ornamento de bolinhas amarelas (aparece apenas no primeiro slide do Hero) */}
        {isHomeHero && currentIndex === 0 && (
          <img
            src="/ornamento-11.png"
            alt="Ornamento"
            style={{
              position: 'absolute',
              right: '7%',
              top: '20%',
              width: '137px',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        )}

        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className={isHomeHero ? '' : 'w-100 h-100'}
          style={
            isHomeHero
              ? {
                  position: 'absolute',
                  right: '5%',
                  top: '50%',
                  transform: currentIndex === 0 
                    ? 'translateY(-50%) rotate(-20deg) scale(1.1)' 
                    : 'translateY(-50%)',
                  width: '52%',
                  height: '90%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  zIndex: 2,
                  filter: currentIndex === 0 ? 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2))' : 'none',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }
              : {
                  objectFit: 'contain'
                }
          }
        />

        {/* SETAS DE NAVEGAÇÃO NAS LATERAIS */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent p-3 d-flex align-items-center justify-content-center ms-2"
              style={{ cursor: 'pointer', zIndex: 4 }}
              aria-label="Slide anterior"
            >
              <img src="/assets/arrow-left.svg" alt="Anterior" style={{ width: '28px', height: '28px' }} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent p-3 d-flex align-items-center justify-content-center me-2"
              style={{ cursor: 'pointer', zIndex: 4 }}
              aria-label="Próximo slide"
            >
              <img src="/assets/arrow-right.svg" alt="Próximo" style={{ width: '28px', height: '28px' }} />
            </button>

            {/* Bolinhas de navegação abaixo */}
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2"
              style={{ zIndex: 3, paddingBottom: '20px' }}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para o slide ${idx + 1}`}
                  style={{
                    width: '12px',
                    height: '12px',
                    border: 0,
                    borderRadius: '50%',
                    padding: 0,
                    background: currentIndex === idx ? '#c92071' : '#cccccc',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {showThumbs && images.length > 1 && (
        <div 
          className="d-flex mt-3 overflow-auto pb-2"
          style={{ 
            gap: '2.36rem',
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {images.map((img, idx) => {
            const thumbBgColors = ['#e2e3ff', '#ffe8bc', '#ffc0bc', '#dec699', '#e0d7c8'];
            const cardBg = thumbBgColors[idx % thumbBgColors.length];

            return (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="rounded overflow-hidden"
                style={{
                  width: '117px',
                  height: '95px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  border: currentIndex === idx ? '2px solid #C92071' : '1px solid transparent',
                  backgroundColor: cardBg,
                  padding: '4px'
                }}
              >
                <img
                  src={img.src}
                  alt={`Thumb ${idx + 1}`}
                  className="w-100 h-100 object-fit-contain"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};