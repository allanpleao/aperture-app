import React from 'react'
import styles from './Input.module.css'

const Input = React.forwardRef(({onBlur, error, onChange, label, value, type }, ref) => {
  return (
    <div className={styles.input}>
        <label htmlFor="">{label}</label>
        <input onBlur={onBlur} onChange={onChange} type={type} value={value}/>
        <p style={{ color: 'orange'}}>{error}</p>
    </div>
  )
})
Input.displayName = 'Input';
export default Input