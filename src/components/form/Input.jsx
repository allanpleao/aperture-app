import React from 'react'
import styles from './Input.module.css'

const Input = ({ onChange, label, value, type }) => {
  return (
    <div className={styles.input}>
        <label htmlFor="">{label}</label>
        <input onChange={onChange} type={type} value={value}/>
    </div>
  )
}

export default Input