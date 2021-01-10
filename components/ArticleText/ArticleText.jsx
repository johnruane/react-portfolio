import React from 'react';
import style from './ArticleText.module.css';

const ArticleText = ({
  title,
  text
}) => {
  return (
    <article className={`grid ${style.article}`}>
      <h2 className={style.heading}>{title}</h2>
      <p className={style.text}>{text}</p>
    </article>
  )
}

export default ArticleText;