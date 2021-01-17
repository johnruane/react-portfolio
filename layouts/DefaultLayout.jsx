import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './DefaultLayout.module.css';

const DefaultLayout = ({
  children,
  coverSlot,
}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <div className={`grid ${style.footerWrapper}`}>
        <Footer/>         
      </div>
    </>
  )
}

export default DefaultLayout;