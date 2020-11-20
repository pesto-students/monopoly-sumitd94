/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (props.show ? (
  <div className="Backdrop" onClick={props.closeModal} />
) : null);

export default backdrop;
