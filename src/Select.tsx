import React from 'react'

import styles from './select.module.css'

type SelectOptions = {
    label: string,
    value: any
}

type SelectProps = {
    value: SelectOptions, 
    options: SelectOptions[],
    onChange: (value: SelectOptions | undefined) => void   
}

export function Select({value, options, onChange}: SelectProps){
    return (
        <div className={styles.container}>
            <span className={styles.value}>Value</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}