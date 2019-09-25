import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config'

const Footer = () => (
    <div className={styles.footer}>
        <Link to="/" className={styles.logo}>
        <img alt="fim logo" src="/images/fim_logo.png"/>
        </Link>
        <div>
            @SB {CURRENT_YEAR} all rights reserved.
        </div>
    </div>

)

export default Footer;