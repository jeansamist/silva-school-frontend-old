import React from 'react';

export default function Flexbox({ children, classNames = [''] }) {
  return <div className={'flex ' + classNames.join(' ')}>{children}</div>;
}
