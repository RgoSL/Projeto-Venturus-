import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

function CampoTexto({ label, type, name, value, onChange, autoComplete }) {
  return (
    <MDBInput
      wrapperClass="mb-4"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

export {CampoTexto}
