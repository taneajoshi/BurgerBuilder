import React from  'react';
import Aux from '../../hoc/Aux';
import classes from './layout.module.scss';

const layout = (props) => (
   <Aux> 
       <div> Toolbar, sidebar, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
   </Aux>
);  

export default layout;