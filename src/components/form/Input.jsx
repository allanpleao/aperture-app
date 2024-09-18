import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, value, type }) => {
  return (
    <div className={styles.formInput}>
        <label htmlFor="">{label}</label>
        <input type={type} value={value}/>
    </div>
  )
}

export default Input