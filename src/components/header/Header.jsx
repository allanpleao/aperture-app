import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/login'}>About</Link>
            <Link to={'/login'}>Some text</Link>
        </nav>
    </header>
  )
}

export default Header