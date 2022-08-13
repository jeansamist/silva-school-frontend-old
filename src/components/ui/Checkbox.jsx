import React, { useState, useEffect } from 'react';
import { randomString } from '../../functions/random';
export default function Checkbox() {
  const [checked, setchecked] = useState(false);
  const [id, setid] = useState('');
  useEffect(() => {
    setid(randomString());
  }, []);
  const handleChange = () => {
    console.log('chec');
    setchecked(!checked);
  };
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  );
}
