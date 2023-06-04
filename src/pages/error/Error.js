import React from 'react'

import styles from './Error.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Error() {
    return (
        <>
            <Header />
            <main data-testid="error" className={styles.container}>
                <div>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <a href="/">retour sur la page d'accueil</a>
            </main>
            <Footer />
        </>
    )
}
