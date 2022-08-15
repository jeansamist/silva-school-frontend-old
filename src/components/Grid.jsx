import React from 'react';

export default function Grid({ gap = true, columns = 1, children, style = {} }) {
  return (
    <div style={{ ...style }} className={'grid grid-' + columns + ' ' + (gap ? 'grid-gap ' : '')}>
      {children}
    </div>
  );
}
