import React from 'react';
import style from './TextBanner.module.css';

const TextBanner = ({
  text
}) => {
  return (
    <>
      <div className={style.text}>{text}</div>
    </>
  )
}

export default TextBanner;