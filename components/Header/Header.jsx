import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={`grid ${style.header}`}>
      <div className={style.headerText}>
        <span className={style.headerTextEmphasis}>JOHN</span>ruane
      </div>
    </header>
  )
}

export default Header;