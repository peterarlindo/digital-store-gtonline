import React from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ theme = 'light', color }) => {
  const isWhite = color === 'white' || theme === 'dark';

  return (
    <div
      className="d-flex align-items-center"
      style={{
        cursor: 'pointer',
        height: '44px'
      }}
    >
      <img 
        src="/logo.svg" 
        alt="Digital Store" 
        style={{ 
          height: '100%', 
          maxHeight: '40px', 
          width: 'auto',
          // Se for tema escuro/branco, inverte a cor da imagem para branco
          filter: isWhite ? 'brightness(0) invert(1)' : 'none'
        }} 
      />
    </div>
  );
};