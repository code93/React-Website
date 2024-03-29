import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {


    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    const logo = () =>{
        return (
            <Link to="/" className={style.logo}>
                <img alt="fim logo" src="/images/fim_logo.png"/>
            </Link>
        )
    }


    return (
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;