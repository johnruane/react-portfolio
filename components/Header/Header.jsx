import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.headerText}>
      <span className={style.headerTextEmphasis}>JOHN</span>ruane
    </header>
  )
}

export default Header;