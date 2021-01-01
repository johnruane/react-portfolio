import React from 'react';
import style from './PreviewCard.module.css';

const PreviewCard = ({
  imgSrc,
  heading,
  subHeading,
  text
}) => {
  return (
    <article className={style.galleryPreview}>
      <img className={style.galleryPreviewImage} src={imgSrc} />
      <div className={style.textWrapper}>
        <div className={style.heading}>{heading}</div>
        <div className={style.subHeading}>{subHeading}</div>
        <div className={style.text}>{text}</div>
      </div>
    </article>
  )
}

export default PreviewCard;