import './CustomModal.scss';
import Aux from '../../../hoc/Aux';
import React from 'react'
import Backdrop from '../Backdrop/Backdrop';

const CustomModal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div 
      className='custom-modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      >
        {props.children}
    </div>
    </Aux>
  )
}

export default CustomModal
