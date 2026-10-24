import React from 'react';
import { Link } from 'react-router-dom';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({
  title,
  titleAlign = 'left',
  link,
  children
}) => {
  return (
    <section className="my-5">
      <div className="container">
        <div className={`d-flex align-items-center justify-content-between mb-4 ${titleAlign === 'center' ? 'text-center flex-column' : ''}`}>
          <h2 className="fw-bold text-dark-gray-2 m-0" style={{ fontSize: '24px' }}>
            {title}
          </h2>
          {link && (
  <Link
    to={link.href}
    className="text-primary-drip text-decoration-none fw-semibold d-flex align-items-center gap-2"
    style={{ fontSize: '20px' }}
  >
    {link.text}
  </Link>
)}
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};
