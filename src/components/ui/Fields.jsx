import React, { useEffect, useState } from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';
import { Controller } from 'react-hook-form'

export default function Field({
  activated = false,
  defaultValue = '',
  label = '',
  onChange = () => { },
  Ico = FaUser,
  type = 'text',
  error = false,
  color = '#fff',
  disabled = false,
  _ref = null,
  name = '',
  field = false
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
    <div {...field} className={`field ${active ? 'active ' : ''}${disabled ? 'field-disabled ' : ''}${error ? 'field-error' : ''}`} style={{ background: color }}>
      <div className="field-input">
        <div className="field-input-label" style={{ background: color }}>
          {label}
        </div>
        <input name={name} ref={_ref} disabled={disabled} value={value} onChange={handleChange} onFocus={() => setactive(true)} onBlur={handleBlur} type={type} />
      </div>
      <div className="field-ico">
        <Ico />
      </div>
      {error && <span className='field-error-text'>{error}</span>}
    </div>
  );
}


/**
 * 
 * @returns {Field}
 */
export function FieldControlled(props) {
  return (
    <Controller
      name={props.name ? props.name : props.label.toLowerCase()}
      control={props.control}
      rules={props.rules}
      render={({ field, fieldState }) => {
        return <Field {...{ ...props, field, error: fieldState.error ? fieldState.error.message : false }} />
      }}
    />
  )
}

export function Textarea({ label = '', color = '#fff',
  disabled = false,
  _ref = null,
  activated = false,
  defaultValue = '',
  onChange = () => { },
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
      <div className="field-textarea">
        <div className="field-input-label" style={{ background: color }}>
          {label}
        </div>
        <textarea ref={_ref} disabled={disabled} value={value} onChange={handleChange} onFocus={() => setactive(true)} onBlur={handleBlur}></textarea>
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
