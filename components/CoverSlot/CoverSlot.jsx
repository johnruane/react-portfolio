import React from 'react';
import style from './CoverSlot.module.css';

const CoverSlot = (
  text,
  subText
) => {
  return (
    <div className={`grid ${style.coverSlotContent}`}>
      <div className={style.coverSlot}>
        <article className={style.salutationWrapper}>
          <div className={style.salutationText}>Hello,</div>
          <div className={style.salutationSubText}>
            I'm a frontend developer from Manchester.
          </div>
        </article>
      </div>
    </div>
  )
}

export default CoverSlot;