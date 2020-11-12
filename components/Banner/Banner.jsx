import React from 'react';
import styles from './Banner.module.css';

const Banner = ({
  additionlClasses,
  color,
  dateText,
  text,
  subText,
}) => {
  return (
    <div className={`${styles.bannerWrapper} ${styles[additionlClasses]}`}>
      <div className={styles.bannerTextWrapper}>
        <div className={styles.dateText}>{dateText}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.subText}>{subText}</div>        
      </div>
    </div>
  )
}

export default Banner;