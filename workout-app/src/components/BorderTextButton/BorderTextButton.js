import React from 'react';
import './styles.css';

function BorderTextButton({ value, onChange, dataLabel }) {
  return (
    <div className='border-button-container'>
      <input
        type='number'
        value={value}
        onChange={onChange}
        className='border-button'
        data-label={dataLabel}
      />
    </div>
  );
}

export default BorderTextButton;
