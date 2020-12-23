import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Layout.module.css';

const Layout = ({
  children
}) => {
  return (
    <>
      <div className={`grid ${style.layoutHeader}`}>
        <Header/>
      </div>
      <main>
        {children}
      </main>
      <Footer/> 
    </>
  )
}

export default Layout;