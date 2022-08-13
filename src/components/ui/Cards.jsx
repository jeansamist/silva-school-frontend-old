import React from 'react';

export default function Card({ title = '', children, padding = true, border = true, backgroundImage = '' }) {
  return (
    <div
      className={(border ? 'card-border ' : '') + 'card ' + (padding ? 'card-padding ' : '')}
      style={{ background: 'url("' + backgroundImage + '") no-repeat center / cover' }}
    >
      {title !== '' ? <div className="card-title">{title}</div> : ''}
      <div className="card-content">{children}</div>
    </div>
  );
}
