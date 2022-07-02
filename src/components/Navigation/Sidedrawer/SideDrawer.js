import React from 'react';
import classes from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = ( props ) => {
  let attachedClasses=[classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
   <Aux> 
     <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <Logo />
        <nav>
            <NavigationItems /> 
        </nav>
    </div>
   </Aux>
  )
}

export default SideDrawer;
