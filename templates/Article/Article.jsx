import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TextBanner from "../../components/TextBanner";
import ArticleText from "../../components/ArticleText";
import ArticleBlock from "../../components/ArticleBlock";
import CoverSlot from '../../components/CoverSlot';
import Pill from '../../components/Pill';
import style from './Article.module.css';

const Article = ({
  heading,
  subHeading,
  subHeadingText,
  released,
  techList,
  body
}) => {
  const {json, links} = body;
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={style.heading}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={style.text}>{children}</p>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
          <div className={style.quote}>{children}</div>
      ),
      [BLOCKS.EMBEDDED_ASSET]: ({data}) => {
        const linkArray = links.assets.block.flatMap((obj) => {
          return obj.url;
        })
        let src = '';
        linkArray.forEach((link) => {
          if (link.includes(data.target.sys.id)) {
            src = link;
          }
        })
        return (
          <img src={src} className={style.image}/>
        )},
    },
  };

  return (
    <>
      <CoverSlot>
        <article className={style.article}>
          <div className={style.supHeadingText}>{subHeading}</div>
          <div className={style.headingText}>{heading}</div>
          <div className={subHeadingText}>
            {`Released ${released}`}
          </div>
        </article>
        <div className={style.subFooterWrapper}>
          <div className={style.subFooterHeadingText}>Technology</div>
          <Pill items={techList.join(",")} />
        </div>
      </CoverSlot>
      <div className="grid">
        {documentToReactComponents(json, options)}
      </div>
    </>
  )
}

export default Article;