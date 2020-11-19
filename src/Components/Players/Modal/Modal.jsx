import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Modal = ({ show, children, closeModal }) => (
  <Aux>
    <Backdrop show={show} closeModal={closeModal} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Aux>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
