import React from 'react'

import styles from './Home.module.css'
import lodgingData from '../../data/lodgingData.json'
import Card from '../../components/card/Card'
import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main data-testid="home-page">
                <Banner
                    textTop="Chez vous, "
                    textBottom="partout et ailleurs"
                    src={`home-banner-img.png`}
                />
                <section className={styles.section}>
                    {lodgingData.map((lodging, idx) => {
                        return (
                            <Card
                                title={lodging.title}
                                src={lodging.cover}
                                id={lodging.id}
                                key={idx}
                            />
                        )
                    })}
                </section>
            </main>
            <Footer />
        </>
    )
}
