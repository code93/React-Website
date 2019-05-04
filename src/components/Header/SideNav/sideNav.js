import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_Items'

const SideNavigation = (props) => {
    return (
            <div>
                <SideNav
                    showNav={props.showNav}
                    onHideNav={props.onHideNav}
                    navstyle={{
                        background: '#242424',
                        maxWidth: '220px'
                    }}
                >

                    <SideNavItems/>
                </SideNav>
             </div>
    )
}

export default SideNavigation;