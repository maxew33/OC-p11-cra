import React from 'react'

import Banner from '../../components/banner/Banner'
import Dropdown from '../../components/dropdown/Dropdown'
import aboutData from '../../data/aboutData.json'

import styles from './About.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function About() {
    return (
        <>
            <Header />

            <main data-testid="about" className={styles.container}>
                <Banner
                    textTop=""
                    textBottom=""
                    src={'/about-banner-img.png'}
                />
                {aboutData.map((aboutDropdown, idx) => {
                    return (
                        <Dropdown
                            title={aboutDropdown.title}
                            size="large"
                            content={aboutDropdown.content}
                            key={idx}
                        />
                    )
                })}
            </main>
            <Footer />
        </>
    )
}
