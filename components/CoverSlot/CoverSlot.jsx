import React from 'react';
import style from './CoverSlot.module.css';

const CoverSlot = ({children})=> {
  return (
    <div className={`grid ${style.coverSlotContent}`}>
      <div className={style.coverSlot}>
        {children}
      </div>
    </div>
  )
}

export default CoverSlot;