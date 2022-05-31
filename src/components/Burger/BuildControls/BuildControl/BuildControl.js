import React from 'react';
import './BuildControl.scss';

const buildControl = (props) => {
   return (
    <div className="build-control flex-center">
        <div className='label'>{props.label}</div>
        <button className='less' 
            onClick={props.deleted} 
            disabled={props.disabled}
        >Less</button>
        <button className='more' onClick={props.added}>More</button>
    </div>
   )
}

export default buildControl;