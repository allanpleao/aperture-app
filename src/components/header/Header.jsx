import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
            <div>
              <Link to={'/'}><img className={styles.logo} src={logo}/></Link>
            <Link to={'/'} className={styles.logoText}>Aperture </Link>
            </div>
        <nav className={styles.nav}>
          
            <Link to={'/login'}>Login</Link>
            <Link to={'/login'}>About</Link>
            <Link to={'/login'}>Some text</Link>
        </nav>
    </header>
  )
}

export default Header