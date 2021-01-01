import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Layout.module.css';

const Layout = ({
  children,
  additionalClass
}) => {
  return (
    <>
      <div className={`grid ${style.headerWrapper}`}>
        <Header/>
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