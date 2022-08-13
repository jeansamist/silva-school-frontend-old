import React from 'react';
import { randomInterval } from '../../functions/random';

export default function Skeleton({ width = '100px', height = 150, lines = 1, type = 'text' }) {
  let linesElement = [<div style={{ width: `100%` }}></div>];
  for (let i = 0; i < lines - 1; i++) {
    linesElement.push(
      <div className="line" key={i} style={{ width: `${randomInterval(90, 100)}%`, overflow: 'hidden' }}></div>
    );
  }
  if (type === 'square') {
    return (
      <div className="skeleton" style={{ width: width, height: width }}>
        <div className="square"></div>
      </div>
    );
  } else if (type === 'block') {
    return (
      <div className="skeleton" style={{ width: width, height: height, overflow: 'hidden' }}>
        <div className="square"></div>
      </div>
    );
  } else {
    return (
      <div className="skeleton" style={{ width: width }}>
        {linesElement}
      </div>
    );
  }
}
