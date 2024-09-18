import React from 'react'

const Input = ({ label, value, type }) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} value={value}/>
    </div>
  )
}

export default Input