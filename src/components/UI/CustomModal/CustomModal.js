import './CustomModal.scss';

import React from 'react'

const CustomModal = (props) => {
  return (
    <div 
      className='custom-modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      >
        {props.children}
    </div>
  )
}

export default CustomModal