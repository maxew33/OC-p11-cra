import React from 'react'

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/LOGO-BLACK.svg'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <NavLink to={'/'} data-testid="footer-link">
                <img src={Logo} alt="Logo de Kasa" className={styles.image} />
            </NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
