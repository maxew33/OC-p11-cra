/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useRef } from 'react'
import styles from './Banner.module.css'


export default function Banner(props) {
    const headerRef = useRef()

    // Update the CSS property '--url' of the header
    useEffect(() => {
        if (!headerRef.current) return
        headerRef.current.style.setProperty('--url', `url(${props.src})`)
    }, [])

    return (
        <header ref={headerRef} className={styles.header}>
            <span>
                <span>{props.textTop}</span>
                <span>{props.textBottom}</span>
            </span>
        </header>
    )
}
