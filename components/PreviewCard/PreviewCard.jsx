import React from 'react';
import style from './PreviewCard.module.css';

const Gallery = () => {
  return (
    <article className={style.galleryPreview}>
      <img className={style.galleryPreviewImage} src="http://via.placeholder.com/684x720.png"/>
    </article>
  )
}

export default Gallery;