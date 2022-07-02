import React, {Component} from  'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './layout.module.scss';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    } 

    render() {
        return (  
            <Aux> 
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                 <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;