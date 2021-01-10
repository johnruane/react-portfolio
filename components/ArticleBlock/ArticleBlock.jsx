import React from 'react';
import style from './ArticleBlock.module.css';

const ArticleBlock = ({
  children
}) => {
  return (
    <div className={style.articleBlock}>
      {children}
    </div>
  )
}

export default ArticleBlock;