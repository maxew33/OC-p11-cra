import React from 'react'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './dropdown.module.css'

export default function Dropdown(props) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div
            className={`${
                props.size === 'large' ? styles.large : styles.medium
            } ${styles.dropdown}`}
        >
            <div className={styles.title} onClick={handleClick}>
                <h2>{props.title}</h2>
                <span className={`${open && styles.rotate} ${styles.arrow}`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>
            <div className={`${open && styles.open} ${styles.content}`}>
                {props.content.map((item, idx) => {
                    return (
                        <div className="item" key={idx}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
