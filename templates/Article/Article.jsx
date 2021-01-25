import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TextBanner from "../../components/TextBanner";
import ArticleText from "../../components/ArticleText";
import ArticleBlock from "../../components/ArticleBlock";
import style from './Article.module.css';

const Article = ({
  document
}) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <p className={style.heading}>{children}</p>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={style.text}>{children}</p>
      ),
    },
  };
  return (
    <div className="grid">
      {documentToReactComponents(document, options)}
    </div>
  )
}

export default Article;

      {/* <ArticleText title="Intro" text={article.intro} />
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      />
      <TextBanner text="“Shared codebase across all devices on the Hybris Commerce platform." />
      <ArticleBlock>
        {article.body.json.content.map((article) => {
          return (
            <ArticleText
              key={article.heading}
              title={article.heading}
              text={article.text}
            />
          );
        })}
      </ArticleBlock>
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      /> */}