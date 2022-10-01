import React, { useState, useEffect } from 'react';
import { randomString } from '../../functions/random';
export default function Checkbox(onChange = () => { }) {
  const [checked, setchecked] = useState(false);
  const [id, setid] = useState('');
  useEffect(() => {
    setid(randomString());
  }, []);
  const handleChange = () => {
    setchecked(!checked);
    onChange(!checked)
  };
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  );
}
