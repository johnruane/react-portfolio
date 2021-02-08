import React from 'react';
import Link from 'next/link'
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={`grid ${style.header}`}>
      <Link href="/">
        <a className={style.headerText}>JOHNRUANE
        </a>
      </Link>
    </header>
  )
}

export default Header;