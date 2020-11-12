import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.footerLink}`}>LinkedIn</div>
    <div className={`${styles.footerLink}`}>Instagram</div>
  </footer>  
)

export default Footer;