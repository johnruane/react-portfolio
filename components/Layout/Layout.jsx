import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Layout.module.css';

const Layout = ({
  children,
  coverSlot
}) => {
  return (
    <>
      <div className={`grid ${style.coverSlotWrapper}`}>
        <Header />
        <div className={style.coverSlot}>
          {coverSlot}
        </div>
      </div>
      <main>
        {children}
      </main>
      <div className={`grid ${style.footerWrapper}`}>
        <Footer/>         
      </div>
    </>
  )
}

export default Layout;