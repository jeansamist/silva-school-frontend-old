import React from 'react';
import { Button } from './ui/Buttons';

export default function Form({
  buttonLabel = 'Validate',
  onSubmit = () => {},
  children,
  largeBtn = true,
  errors = [],
}) {
  return (
    <form
      action="#"
      method="post"
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
      <Button largeBtn={largeBtn} label={buttonLabel} />
      {errors.map((error, key) => (
        <div key={key} className="form-error">
          {error}
        </div>
      ))}
    </form>
  );
}
