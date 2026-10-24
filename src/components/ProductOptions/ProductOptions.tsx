import React, { useState } from 'react';
import { ProductOptionsProps } from '../../types';

export const ProductOptions: React.FC<ProductOptionsProps> = ({
  options,
  radius = '4px',
  type = 'text',
  shape = 'square',
  selected: selectedProp,
  onSelect
}) => {
  const [internalSelected, setInternalSelected] = useState<string>(options[0] || '');

  const selected = selectedProp ?? internalSelected;

  const handleSelect = (option: string) => {
    setInternalSelected(option);
    onSelect?.(option);
  };

  return (
    <div className="d-flex gap-2 flex-wrap align-items-center my-2">
      {options.map((option, idx) => {
        const isSelected = selected === option;

        if (type === 'color') {
  return (
    <button
      key={idx}
      onClick={() => handleSelect(option)}
      className="rounded-circle p-0 position-relative"
      style={{
        width: '31px',
        height: '31px',
        backgroundColor: option,
        cursor: 'pointer',
        border: isSelected ? '2px solid #C92071' : '1px solid #CCCCCC'
      }}
      title={option}
    />
  );
}

        return (
          <button
            key={idx}
            onClick={() => handleSelect(option)}
          className="btn d-flex align-items-center justify-content-center fw-bold"
style={{
  width: '48px',
  height: '46px',
  borderRadius: shape === 'circle' ? '50%' : radius,
  fontSize: '24px',
backgroundColor: isSelected ? '#C92071' : '#FFFFFF',
  color: isSelected ? '#FFFFFF' : '#474747',
  border: isSelected ? '2px solid #C92071' : '1px solid #CCCCCC'
}}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
