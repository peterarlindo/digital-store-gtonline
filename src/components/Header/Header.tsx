import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.namedItem('search') as HTMLInputElement;
  const term = input.value.trim();

  navigate(`/products?filter=${encodeURIComponent(term)}`);
};

  return (
    <header className="bg-white py-4 border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-4 mb-3">
          {/* Logo */}
          <Link className="text-decoration-none" to="/">
            <Logo theme="light" />
          </Link>

          {/* Barra de Pesquisa */}
          <form onSubmit={handleSearch} className="flex-grow-1 position-relative d-none d-md-block" style={{ maxWidth: '559px' }}>
            <input 
  type="text" 
  name="search"
  className="form-control bg-light border-0 py-2 px-3 rounded-2" 
  placeholder="Pesquisar produto..." 
  style={{ paddingRight: '40px' }}
/>
           <button
  type="submit"
  className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent pe-3 text-muted d-flex align-items-center justify-content-center"
  aria-label="Pesquisar"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="7"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M16.5 16.5L21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</button>
          </form>

          {/* Ações da Direita (Cadastre-se / Entrar / Carrinho) */}
          <div className="d-flex align-items-center gap-4">
            <Link
  to="/auth"
  className="text-dark-gray-2 d-none d-lg-block"
  style={{
    fontSize: '18px',
    textDecoration: 'underline'
  }}
>
  Cadastre-se
</Link>
            <Link
  to="/auth"
  className="btn text-white fw-bold d-flex align-items-center justify-content-center"
  style={{
    width: '114px',
    height: '40px',
    backgroundColor: '#C92071',
    borderRadius: '10px',
    fontSize: '18px'
  }}
>
  Entrar
</Link>
            <Link
  to="/cart"
  className="text-decoration-none d-flex align-items-center justify-content-center"
  style={{ color: '#C92071' }}
  aria-label="Carrinho"
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4H5L7.2 15.2C7.4 16.2 8.3 17 9.3 17H17.5C18.5 17 19.4 16.3 19.7 15.4L21 8H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="20" r="1.5" fill="currentColor" />
    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
  </svg>
</Link>
          </div>
        </div>

        {/* Menu de Navegação Inferior */}
        <nav className="d-flex gap-4 align-items-center pt-2">
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `text-decoration-none fw-medium ${
        isActive ? 'text-primary-drip' : 'text-dark-gray-2'
      }`
    }
    style={({ isActive }) => ({
      fontSize: '16px',
      borderBottom: isActive ? '2px solid #C92071' : '2px solid transparent',
      paddingBottom: '6px'
    })}
  >
    Home
  </NavLink>

  <NavLink
    to="/products"
    className={({ isActive }) =>
      `text-decoration-none fw-medium ${
        isActive ? 'text-primary-drip' : 'text-dark-gray-2'
      }`
    }
    style={({ isActive }) => ({
      fontSize: '16px',
      borderBottom: isActive ? '2px solid #C92071' : '2px solid transparent',
      paddingBottom: '6px'
    })}
  >
    Produtos
  </NavLink>

  <NavLink
    to="/categories"
    className={({ isActive }) =>
      `text-decoration-none fw-medium ${
        isActive ? 'text-primary-drip' : 'text-dark-gray-2'
      }`
    }
    style={({ isActive }) => ({
      fontSize: '16px',
      borderBottom: isActive ? '2px solid #C92071' : '2px solid transparent',
      paddingBottom: '6px'
    })}
  >
    Categorias
  </NavLink>

  <NavLink
    to="/orders"
    className={({ isActive }) =>
      `text-decoration-none fw-medium ${
        isActive ? 'text-primary-drip' : 'text-dark-gray-2'
      }`
    }
    style={({ isActive }) => ({
      fontSize: '16px',
      borderBottom: isActive ? '2px solid #C92071' : '2px solid transparent',
      paddingBottom: '6px'
    })}
  >
    Meus Pedidos
  </NavLink>
</nav>
      </div>
    </header>
  );
};