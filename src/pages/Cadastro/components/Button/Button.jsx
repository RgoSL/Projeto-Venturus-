import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function ActionButton({ label, onClick, className }) {
  return (
    <MDBBtn className={className} onClick={onClick}>
      {label}
    </MDBBtn>
  );
}

export default ActionButton;
