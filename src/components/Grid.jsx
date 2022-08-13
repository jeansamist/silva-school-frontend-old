import React from 'react';

export default function Grid({ gap = true, columns = 1, children }) {
  return <div className={'grid grid-' + columns + ' ' + (gap ? 'grid-gap ' : '')}>{children}</div>;
}
