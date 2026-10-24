import React from 'react';
import { FilterGroupProps } from '../../types';


export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  inputType,
  options
}) => {
  return (
    <div className="mb-4">
      <h6 className="fw-bold text-dark-gray-2 mb-3" style={{ fontSize: '16px' }}>
        {title}
      </h6>
      <div className="d-flex flex-column gap-2">
        {options.map((option, idx) => (
          <div key={idx} className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input my-0"
              type={inputType}
              name={title.toLowerCase().replace(/\s+/g, '-')}
              id={`filter-${title}-${idx}`}
              value={option.value || option.text}
            />
            <label 
              className="form-check-label text-dark-gray" 
              htmlFor={`filter-${title}-${idx}`}
              style={{ fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};