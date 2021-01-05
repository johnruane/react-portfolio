import React from 'react';
import style from './Pill.module.css';

const Pill = ({
  items
}) => {
  const itemsArray = items.split(',');
  return (
    <div className={style.pillWrapper}>
      {itemsArray.map((text) => (
        <span className={style.pill}>{text}</span>
      ))}
    </div>
  )
}

export default Pill;