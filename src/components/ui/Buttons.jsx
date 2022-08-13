import React from 'react';

import { Link } from 'react-router-dom';
export function Button({
  to = '#',
  children,
  label = 'button',
  largeBtn = false,
  onClick = () => {},
  type = 'default',
}) {
  if (type === 'link')
    return (
      <Link onClick={onClick} to={to} className={'link btn ' + (largeBtn ? 'btn-large ' : '')}>
        {children ? children : label}
      </Link>
    );
  return (
    <button onClick={onClick} className={'btn ' + (largeBtn ? 'btn-large ' : '')}>
      {children ? children : label}
    </button>
  );
}

export function ButtonLink(props) {
  return <Button {...props} type="link"></Button>;
}
