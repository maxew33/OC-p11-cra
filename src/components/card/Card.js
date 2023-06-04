import React from 'react'

import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
    // Navigation function
    const navigate = useNavigate()

    return (
        <article
            className={styles.card}
            onClick={() => navigate('lodging/' + props.id)}
        >
            <img src={props.src} alt={props.title} />
            <span className={styles.title}>{props.title}</span>
        </article>
    )
}
