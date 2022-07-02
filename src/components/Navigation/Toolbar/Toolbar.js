import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.scss';

const Toolbar = (props) => {
  return (
    <header className='toolbar align-center text-white text-bold'>
        <div onClick={props.drawerToggleClicked}>Menu</div>
        <Logo />
        <nav className='desktop-only'>
          <NavigationItems />
         </nav>
    </header>
  )
}

export default Toolbar;
