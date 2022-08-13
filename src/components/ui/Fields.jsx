import React, { useEffect, useState } from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';
export default function Field({
  activated = false,
  defaultValue = '',
  label = '',
  onChange = () => {},
  Ico = FaUser,
  type = 'text',
  color = '#fff',
}) {
  const [active, setactive] = useState(false);
  const [value, setvalue] = useState('');
  function handleBlur(e) {
    if (value === '') {
      setactive(false);
    } else {
      setactive(true);
    }
  }
  useEffect(() => {
    setvalue(defaultValue);
    setactive(activated);
  }, [activated, defaultValue]);

  function handleChange(e) {
    let newValue = e.target.value;
    setvalue(newValue);
    onChange(newValue);
  }
  return (
    <div className={'field ' + (active ? 'active' : '')} style={{ background: color }}>
      <div className="field-input">
        <div className="field-input-label" style={{ background: color }}>
          {label}
        </div>
        <input value={value} onChange={handleChange} onFocus={() => setactive(true)} onBlur={handleBlur} type={type} />
      </div>
      <div className="field-ico">
        <Ico />
      </div>
    </div>
  );
}

export function Textarea({ label = '', color = '#fff' }) {
  const [active, setactive] = useState(false);
  const [value, setvalue] = useState('');
  function handleBlur(e) {
    if (value === '') {
      setactive(false);
    } else {
      setactive(true);
    }
  }
  function handleChange(e) {
    let newValue = e.target.value;
    setvalue(newValue);
  }
  return (
    <div className={'field ' + (active ? 'active' : '')} style={{ background: color }}>
      <div className="field-textarea">
        <div className="field-input-label" style={{ background: color }}>
          {label}
        </div>
        <textarea value={value} onChange={handleChange} onFocus={() => setactive(true)} onBlur={handleBlur}></textarea>
      </div>
    </div>
  );
}

export function SearchField() {
  return (
    <div className="search-field-container">
      <div className="search-field">
        <Field label="Search" Ico={FaSearch} />
      </div>
      <div className="results"></div>
    </div>
  );
}
