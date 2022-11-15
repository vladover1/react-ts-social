import React from 'react';
import classes from './header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://www.designevo.com/res/templates/thumb_small/evil-villain.webp' alt='logo'/>
        </header>
    );
};

export default Header;