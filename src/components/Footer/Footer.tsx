import React from 'react';
import { Logo } from '../Logo/Logo';
import { FooterInformationGroupProps } from '../../types';

const InformationGroup: React.FC<FooterInformationGroupProps> = ({ title, informations }) => (
  <div>
    <h5 className="text-white fw-bold mb-4" style={{ fontSize: '18px' }}>{title}</h5>
    <ul className="list-unstyled">
      {informations.map((info, idx) => (
        <li key={idx} className="mb-2">
          <a href={info.link} className="text-light-gray-2 text-decoration-none" style={{ fontSize: '17px' }}>
            {info.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  const infoGroup1 = {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '#' },
      { text: 'Segurança', link: '#' },
      { text: 'Wishlist', link: '#' },
      { text: 'Blog', link: '#' },
      { text: 'Trabalhe conosco', link: '#' },
      { text: 'Meus Pedidos', link: '#' },
    ]
  };

  const infoGroup2 = {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '#' },
      { text: 'Calças', link: '#' },
      { text: 'Bonés', link: '#' },
      { text: 'Headphones', link: '#' },
      { text: 'Tênis', link: '#' },
    ]
  };

  return (
    <footer className="bg-dark-gray text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4 mb-4">
          <div className="col-12 col-md-4">
  <Logo color="white" />

  <p className="mt-3 text-light-gray-2" style={{ fontSize: '14px', lineHeight: '26px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <div className="d-flex align-items-center gap-4 mt-3">
  <a href="#" aria-label="Facebook">
    <img src="/assets/facebook.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
  </a>

  <a href="#" aria-label="Instagram">
    <img src="/assets/instagram.svg" alt="Instagram" style={{ width: '24px', height: '24px' }} />
  </a>

  <a href="#" aria-label="Twitter">
    <img src="/assets/twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px' }} />
  </a>
</div>
</div>
          <div className="col-6 col-md-3">
            <InformationGroup {...infoGroup1} />
          </div>
          <div className="col-6 col-md-3">
            <InformationGroup {...infoGroup2} />
          </div>
          <div className="col-12 col-md-2">
            <h5 className="text-white fw-bold mb-4" style={{ fontSize: '18px' }}>Contato</h5>
            <p className="text-light-gray-2 mb-1" style={{ fontSize: '16px' }}>
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p className="text-light-gray-2" style={{ fontSize: '14px' }}>(85) 3051-3411</p>
          </div>
        </div>
        <hr className="border-secondary opacity-75 my-4" />
        <div className="text-center text-light-gray-2" style={{ fontSize: '14px' }}>
          © 2024 Digital Store
        </div>
      </div>
    </footer>
  );
};
